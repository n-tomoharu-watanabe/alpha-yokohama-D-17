import React from "react"
import { createStoreProvider } from "../utils/create-store-provider"

export interface Store {
  state: { section: number[] }
  modal?: React.ReactElement
}

const DefaultStore: Store = {
  state: { section: [0] },
  modal: undefined,
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
