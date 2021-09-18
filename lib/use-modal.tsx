import React from "react"
import { Store } from "./store"

interface ModalContentProps {
  close: () => void
}

interface SetModal {
  (Component: React.VFC<ModalContentProps>): void
}

export const useModal = (): SetModal => {
  const [_, updateStore] = Store.useWithUpdate()

  const close = () => {
    updateStore(store => {
      store.modal = undefined
    })
  }

  return (Component) => {
    updateStore(store => {
      if (!store.modal) {
        store.modal = (<Component close={close} />)
        return
      }

      store.modal = undefined
      setTimeout(() => {
        updateStore(store => {
          store.modal = (<Component close={close} />)
        })
      }, 300)
    })
  }
}