import React, { Component } from "react"
import { ModalContainer } from "../components/Modal"
import { Store } from "./store"

interface ModalContentProps {
  close: () => void
}

interface SetModal {
  (Component: React.VFC<ModalContentProps>): void
}

export const useModalCore = (): SetModal => {
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

export const useModal = (): SetModal => {
  const setModal = useModalCore()

  return (Component) => {
    setModal(({ close }) => (
      <ModalContainer close={close}>
        <Component close={close} />
      </ModalContainer>
    ))
  }
}