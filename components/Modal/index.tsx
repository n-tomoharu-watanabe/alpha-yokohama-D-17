import React from "react"
import { EasyTransition } from "../EasyTransition"
import { InsertClassName } from "../InsertClassName"

interface ModalTransitionProps {
  children?: React.ReactElement
}

export const ModalTransition = ({ children }: ModalTransitionProps) => {
  return (
    <EasyTransition
      transition="transition-opacity duration-150"
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
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-70" onClick={() => close?.()} />
      <div className="modal-container bg-white w-11/12 max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {children ?? "Hello!"}
      </div>
    </div>
  )
}

interface ModalBaseTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
  color?: string
}

export function ModalBaseTemplate(props: ModalBaseTemplateProps) {
  return (
    <div>
      {props.header && (
        <div className="text-white text-lg">
          {React.isValidElement(props.header) ? (
            <InsertClassName where="before" className="py-0.5 px-4">
              {props.header}
            </InsertClassName>
          ) : (
            <div className="py-0.5 px-4 bg-gray-500">
              {props.header}
            </div>
          )}
        </div>
      )}

      {props.content && (
        <div className="text-lg px-4 py-2">
          {props.content}
        </div>
      )}

      {props.footer && (
        <div className="text-blue-400 text-xl px-4 pb-2 flex justify-end">
          {props.footer}
        </div>
      )}
    </div>
  )
}

export function ModalButton(props: JSX.IntrinsicElements["button"]) {
  return <button {...props} className={`mx-2 px-4 py-0.5 transition-all duration-300 ${props.className ?? ""} `} />
}

interface ConfirmModalProps {
  children?: React.ReactNode
  close?: () => void
  onConfirm?: () => void
}

export function ConfirmModal({ children, close, onConfirm }: ConfirmModalProps) {
  return (
    <ModalBaseTemplate
      header="confirm"
      content={children}
      footer={(
        <>
          <ModalButton
            className="hover:bg-blue-50 border-1 rounded text-blue-700"
            onClick={() => { close?.() }}
          >
            Cancel
          </ModalButton>
          <ModalButton
            className="bg-blue-700 hover:bg-blue-600 rounded text-white"
            onClick={() => { onConfirm?.(); close?.() }}
          >
            OK
          </ModalButton>
        </>
      )}
    />
  )
}
