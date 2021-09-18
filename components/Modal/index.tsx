import React, { useEffect, useState } from "react"
import { Transition } from '@headlessui/react'

interface ModalContainerProps {
  children?: React.ReactElement
}

function useCacheState<T>(state: T) {
  const [cache, setCache] = useState<T | undefined>()

  useEffect(() => {
    if (state) { setCache(state) }
  }, [state])

  return cache
}

interface EasyTransitionProps {
  children?: React.ReactNode

  transition?: string
  from?: string
  to?: string

  enter?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
}

function EasyTransition({ children, ...props }: EasyTransitionProps) {
  const cache = useCacheState(children)

  return (
    <Transition
      show={Boolean(children)}
      enter={props.enter ?? props.transition}
      enterFrom={props.enterFrom ?? props.from}
      enterTo={props.enterTo ?? props.to}
      leave={props.leave ?? props.transition}
      leaveFrom={props.leaveFrom ?? props.to}
      leaveTo={props.leaveTo ?? props.from}
    >
      {cache}
    </Transition>
  )
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