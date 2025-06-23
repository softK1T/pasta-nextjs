"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortField = "reactions" | "views" | "forwards" | "date";
type SortDir = "asc" | "desc";

interface Props {
  sort: SortField;
  order: SortDir;
  setSort: (v: SortField) => void;
  setOrder: (v: SortDir) => void;
}

export function SortControls({ sort, order, setSort, setOrder }: Props) {
  return (
    <>
      <Select value={sort} onValueChange={(v) => setSort(v as SortField)}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="reactions">Reactions</SelectItem>
          <SelectItem value="views">Views</SelectItem>
          <SelectItem value="forwards">Forwards</SelectItem>
          <SelectItem value="date">Date</SelectItem>
        </SelectContent>
      </Select>

      <Select value={order} onValueChange={(v) => setOrder(v as SortDir)}>
        <SelectTrigger className="w-[110px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desc">▼ Desc</SelectItem>
          <SelectItem value="asc">▲ Asc</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
