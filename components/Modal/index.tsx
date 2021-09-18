import React from "react"
import { EasyTransition } from "../EasyTransition"

interface ModalTransitionProps {
  children?: React.ReactElement
}

export const ModalTransition = ({ children }: ModalTransitionProps) => {
  return (
    <EasyTransition
      transition="transition-opacity duration-300"
      from="opacity-0"
      to="opacity-100"
    >
      {children ? children : null}
    </EasyTransition>
  )
}

interface ModalContainerProps {
  children?: React.ReactElement
  close?: () => void
}

export function ModalContainer({ children, close }: ModalContainerProps) {
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={() => close?.()} />
      <div className="modal-container bg-white w-11/12 max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {children ?? "Hello!"}
      </div>
    </div>
  )
}