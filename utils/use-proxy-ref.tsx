import { useRef } from "react"

export function useProxyRef<T extends object>(state: T) {
  const ref = useRef<T>(state)
  ref.current = state

  const prop = new Proxy<T>(state, {
    get(_, prop) {
      return ref.current[prop as keyof T]
    },
    set(_, prop, value) {
      ref.current[prop as keyof T] = value
      return true
    },
  })

  return prop
}