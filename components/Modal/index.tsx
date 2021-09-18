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

export const ModalContainer = ({ children }: ModalContainerProps) => {
  const cache = useCacheState(children)

  return (
    <Transition
      show={Boolean(children)}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
        <div className="modal-container bg-white w-11/12 max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          {cache}
        </div>
      </div>
    </Transition>
  )
}