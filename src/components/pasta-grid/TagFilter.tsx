"use client";

import { useMemo } from "react";
import { CheckIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTags, TagRow } from "@/app/hooks/useTags";

interface Props {
  picked: Set<string>;
  toggle: (t: string) => void;
}

export function TagFilter({ picked, toggle }: Props) {
  const { data: tags = [] } = useTags();

  const ordered: TagRow[] = useMemo(() => {
    const sel = tags.filter((t) => picked.has(t.hashtag));
    const rest = tags.filter((t) => !picked.has(t.hashtag));
    return [...sel, ...rest];
  }, [tags, picked]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="min-w-[180px]">
          {picked.size ? `Tags (${picked.size})` : "Filter tags"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0 w-60">
        <Command>
          <CommandInput placeholder="Search tags…" />
          <CommandList>
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup>
              {ordered.map(({ hashtag, pasta_cnt }) => {
                const selected = picked.has(hashtag);
                return (
                  <CommandItem
                    key={hashtag}
                    onSelect={() => toggle(hashtag)}
                    className="cursor-pointer"
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        selected ? "opacity-100 text-primary" : "opacity-0"
                      )}
                    />
                    <span className="flex-1 truncate">#{hashtag}</span>
                    <Badge variant="secondary">{pasta_cnt}</Badge>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
