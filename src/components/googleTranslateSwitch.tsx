"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { googleTranslateUrl } from "@/lib/googleTranslate";

export function GoogleTranslateSwitch() {
  const pathname = usePathname();
  const [origin, setOrigin] = useState("");

  useEffect(() => setOrigin(window.location.origin), []);

  const translatedHref = googleTranslateUrl("pl", origin + pathname);

  return (
    <a
      href={translatedHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded px-2 py-1 
                  hover:bg-gray-100 lg:ml-auto pl-1"
    >
      🇵🇱 Polski
    </a>
  );
}
