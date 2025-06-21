"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function PopoverHint() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <h2
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="text-sm text-gray-500 cursor-help underline decoration-dotted"
        >
          Что такое паста?
        </h2>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        className="max-w-md rounded-md bg-gray-900 px-3 py-2 text-md text-white shadow-lg"
      >
        Крипипаста (англ. Creepypasta) – это жанр интернет-фольклора,
        представляющий собой короткие, часто страшные истории или легенды,
        распространяемые в сети. Они призваны вызывать у читателя чувство
        страха, дискомфорта или тревоги.{" "}
      </PopoverContent>
    </Popover>
  );
}
