import useSWR from "swr";

export interface TagRow {
  hashtag: string;
  pasta_cnt: number;
}

const fetcher = (url: string): Promise<TagRow[]> =>
  fetch(url).then((r) => r.json());

export function useTags() {
  return useSWR<TagRow[]>("/api/hashtags", fetcher);
}
