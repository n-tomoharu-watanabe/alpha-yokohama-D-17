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

interface MessageModalProps {
  header?: React.ReactNode
  children?: React.ReactNode
  close?: () => void
  onConfirm?: () => void
}

export function MessageModal({ header = "メッセージ", children, close, onConfirm }: MessageModalProps) {
  return (
    <ModalBaseTemplate
      header={header}
      content={children}
      footer={(
        <ModalButton
          className="bg-blue-700 hover:bg-blue-600 rounded text-white"
          onClick={() => { onConfirm?.(); close?.() }}
        >
          OK
        </ModalButton>
      )}
    />
  )
}

interface ConfirmModalProps {
  children?: React.ReactNode
  close?: () => void
  onConfirm?: () => void
}

export function ConfirmModal({ children, close, onConfirm }: ConfirmModalProps) {
  return (
    <ModalBaseTemplate
      header="確認メッセージ"
      content={children}
      footer={(
        <>
          <ModalButton
            className="hover:bg-blue-50 border-1 rounded text-blue-700"
            onClick={() => { close?.() }}
          >
            キャンセル
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

interface HintModalProps {
  hint?: React.ReactNode
  answer?: React.ReactNode
  open?: (element: React.ReactElement) => void,
  close?: () => void,
}

export function HintModal({ hint, answer, close, open }: HintModalProps) {

  const Answer = (
    <MessageModal header={"メッセージ"} close={close} >
      {answer}
    </MessageModal>
  )

  const Confirm = (
    <ConfirmModal  close={close} onConfirm={() => open?.(Answer)}>
      本当に答えを見ますか？
    </ConfirmModal>
  )

  return (
    <ModalBaseTemplate
      header="メッセージ"
      content={hint}
      footer={(
        <>
          <ModalButton
            className="hover:bg-red-100 border-1 border-red-600 rounded text-red-600"
            onClick={() => { open?.(Confirm); close?.() }}
          >
            答えを見る
          </ModalButton>
          <ModalButton
            className="bg-blue-700 hover:bg-blue-600 rounded text-white"
            onClick={() => { close?.() }}
          >
            OK
          </ModalButton>
        </>
      )}
    />
  )
}
