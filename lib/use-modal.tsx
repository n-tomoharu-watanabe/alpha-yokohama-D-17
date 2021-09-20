import React, { Component } from "react"
import { CloneElement } from "../components/CloneElement"
import { ModalContainer } from "../components/Modal"
import { Store } from "./store"

interface ModalContentProps {
  close: () => void
}

interface SetModal {
  (Component: React.VFC<ModalContentProps>): void
}

export const useModalCore = () => {
  const [_, updateStore] = Store.useWithUpdate()

  const close = () => {
    updateStore(store => {
      store.modal = undefined
    })
  }

  const setModalComponent: SetModal = (Component) => {
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

  return setModalComponent
}

export const useShowModal = () => {
  const setModal = useModalCore()

  const showModal = (element: React.ReactElement) => {
    setModal(({ close }) => (
      <ModalContainer close={close}>
        <CloneElement
          element={element as JSX.Element}
          props={{ open: showModal, close }}
          children={element.props.children}
        />
      </ModalContainer>
    ))
  }

  return showModal
}