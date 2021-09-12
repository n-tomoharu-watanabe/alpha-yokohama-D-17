import { createContext, Context, ReactNode, useContext } from "react"
import { useUpdateState } from "./use-update-state"

function useContextProvider<T>(initialState: T | (() => T)) {
  const Context: Context<T> = createContext<T>(undefined as any)

  const Provider = ({ children }: { children?: ReactNode }) => (
    <Context.Provider value={initialState instanceof Function ? initialState() : initialState}>
      {children}
    </Context.Provider>
  )

  return [Context, Provider] as const
}


export function createStoreProvider<T>(initialState: T | (() => T)) {
  const [StoreContext, StoreProvider] = useContextProvider(() => {
    const [state, update, set] = useUpdateState(initialState)
    return { state, update, set }
  })

  const useStore = () => {
    const { state } = useContext(StoreContext)
    return state
  }

  const useUpdateStore = () => {
    const { state, update } = useContext(StoreContext)
    return [state, update] as const
  }

  const useSetStore = () => {
    const { state, set } = useContext(StoreContext)
    return [state, set] as const
  }

  const hooks = { useStore, useUpdateStore, useSetStore }

  return [StoreProvider, hooks] as const
}
