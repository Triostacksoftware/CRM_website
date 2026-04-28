"use client";

export function triggerLeadSuccessToast(message = "Thank you! Your details were submitted successfully.") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("lead:success", {
      detail: { message },
    })
  );
}

