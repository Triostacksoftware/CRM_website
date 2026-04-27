import { NextResponse } from "next/server";

const THANK_YOU_PATH = "/thank-you-crm-demo";
const LEAD_SUCCESS_COOKIE = "crm_demo_submitted";

export function middleware(request) {
  if (request.nextUrl.pathname !== THANK_YOU_PATH) {
    return NextResponse.next();
  }

  const hasValidSuccessCookie = request.cookies.get(LEAD_SUCCESS_COOKIE)?.value === "1";
  if (!hasValidSuccessCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();
  response.cookies.set({
    name: LEAD_SUCCESS_COOKIE,
    value: "",
    path: "/",
    maxAge: 0,
  });
  return response;
}

export const config = {
  matcher: ["/thank-you-crm-demo"],
};
