import { DependencyList, EffectCallback, useEffect, useState } from "react"

export function useEffected(effect: EffectCallback, deps?: DependencyList): void {
  const [flag, setFlag] = useState<boolean>(false)

  useEffect(() => {
    if (!flag) setFlag(true)
  }, [deps])

  useEffect(() => {
    if (flag) effect()
  }, [flag])
}