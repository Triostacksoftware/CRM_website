import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RESERVED_FIELDS = new Set(["name", "email", "phone", "company", "message", "notes"]);

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function getWebhookConfig() {
  return {
    webhookUrl: cleanString(process.env.TRIO_CRM_WEBSITE_WEBHOOK_URL),
    webhookSecret: cleanString(process.env.TRIO_CRM_WEBSITE_WEBHOOK_SECRET),
  };
}

export async function POST(request) {
  const { webhookUrl, webhookSecret } = getWebhookConfig();

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      { success: false, error: "Lead webhook is not configured on the server." },
      { status: 500 }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = cleanString(body?.name);
  const email = cleanString(body?.email);
  const phone = cleanString(body?.phone);

  if (!name || !email || !phone) {
    return NextResponse.json(
      { success: false, error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  const payload = {
    name,
    email,
    phone,
  };

  const company = cleanString(body?.company);
  if (company) {
    payload.company = company;
  }

  const noteParts = [cleanString(body?.message), cleanString(body?.notes)].filter(Boolean);
  if (noteParts.length) {
    payload.message = noteParts.join("\n\n");
  }

  for (const [key, value] of Object.entries(body || {})) {
    if (RESERVED_FIELDS.has(key)) {
      continue;
    }

    if (typeof value === "string") {
      const cleaned = value.trim();
      if (cleaned) {
        payload[key] = cleaned;
      }
      continue;
    }

    if (typeof value === "number" || typeof value === "boolean") {
      payload[key] = value;
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": webhookSecret,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "");

      return NextResponse.json(
        {
          success: false,
          error: "Lead webhook request failed.",
          details: details.slice(0, 500),
        },
        { status: 502 }
      );
    }

    const data = await response.json().catch(() => null);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to reach the lead webhook.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 502 }
    );
  }
}
