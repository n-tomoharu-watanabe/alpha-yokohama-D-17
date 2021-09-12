import { useState } from "react"

export function useUpdateState<T>(initialState: T | (() => T)) {
  const [_state, _setState] = useState((
    initialState instanceof Function ? (
      () => ({ value: initialState() })
    ) : (
      { value: initialState }
    )
  ))

  const updateState = (
    callback: (state: T) => any
  ) => {
    callback(_state.value)
    _setState({ value: _state.value })
  }

  const setState = (state: T) => {
    _state.value = state
    _setState({ value: state })
  }

  return [_state.value, updateState, setState] as const
}