import { createStoreProvider } from "../utils/create-store-provider"

export interface Store {
  state: { section: number[] }
}

const DefaultStore: Store = {
  state: { section: [0] }
}

const [Provider, Hooks] = createStoreProvider(() => DefaultStore)
const { useStore, useUpdateStore, useSetStore } = Hooks

export class Store {
  static use = useStore
  static useWithUpdate = useUpdateStore
  static useWithSet = useSetStore

  static get default() {
    return DefaultStore
  }

  static get Provider() {
    return Provider
  }
}
