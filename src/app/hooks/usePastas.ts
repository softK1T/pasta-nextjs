import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function usePastas(query: string) {
  return useSWR(`/api/pasta?${query}`, fetcher);
}
