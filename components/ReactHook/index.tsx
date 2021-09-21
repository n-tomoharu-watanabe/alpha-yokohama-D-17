import { useMemo } from "react";

interface ReactMemoProps {
  children: () => JSX.Element | null,
  deps: React.DependencyList
}

export function ReactMemo({ children, deps }: ReactMemoProps) {
  return useMemo(children, deps)
}