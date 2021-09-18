import React from "react"
import { EasyTransition } from "../EasyTransition"

interface ModalContainerProps {
  children?: React.ReactElement
}

export const ModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <EasyTransition
      transition="transition-opacity duration-1000"
      from="opacity-0"
      to="opacity-100"
    >
      {children ? (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
          <div className="modal-container bg-white w-11/12 max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            {children}
          </div>
        </div>
      ) : null}
    </EasyTransition>
  )
}