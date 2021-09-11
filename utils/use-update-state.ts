import { useState } from "react"

export function useUpdateState<T>(initialState: T | (() => T)) {
  const [state, setState] = useState((
    initialState instanceof Function ? (
      () => ({ value: initialState() })
    ) : (
      { value: initialState }
    )
  ))

  const update = (
    callback: (state: T) => any
  ) => {
    callback(state.value)
    setState({ value: state.value })
  }

  return [state.value, update] as const
}