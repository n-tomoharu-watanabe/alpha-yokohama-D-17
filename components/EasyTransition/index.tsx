import React, { useEffect, useState } from "react"
import { Transition } from '@headlessui/react'

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

export const EasyTransition = ({ children, ...props }: EasyTransitionProps) => {
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