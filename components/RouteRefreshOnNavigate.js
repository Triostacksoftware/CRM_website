"use client";

import { startTransition, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RouteRefreshOnNavigate() {
  const pathname = usePathname();
  const router = useRouter();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;
    window.scrollTo({ top: 0, behavior: "auto" });

    startTransition(() => {
      router.refresh();
    });
  }, [pathname, router]);

  return null;
}
