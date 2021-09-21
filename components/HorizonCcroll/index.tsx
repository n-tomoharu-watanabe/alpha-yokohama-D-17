import React, { DependencyList, MutableRefObject, useEffect, useMemo, useRef, useState } from "react"

import { useAvailableSections } from "../../lib/use-available-sections"
import { replaceAnchorLinkNumber } from "../../utils/anchor-link"

const useRefState = function <T>(init: T) {
  const [state, setState] = useState<T>(init)

  const ref = useRef<any>(null)
  ref.current = state

  const result = {
    get value(): T {
      return ref.current
    },
    set value(value: T) {
      setState(value)
    }
  }

  return result
}

const useUpdated = (
  effect: React.EffectCallback,
  deps?: React.DependencyList
) => {
  const ref = useRef(true)

  useEffect(() => {
    if (ref.current) {
      ref.current = false
    } else {
      effect()
    }
  }, deps)
}

interface UseScrollProps {
  onStart?: (index: number) => void
  onEnd?: (index: number) => void
}

const useScroll = ({ onStart, onEnd }: UseScrollProps = {}) => {
  const ref = useRef<HTMLElement>(null)

  const position = useRefState<number>(0)
  const width = useRefState<number>(0)

  const mod = position.value % width.value
  const sub = (((mod < width.value / 2) ? 0 : width.value) - mod) || 0
  const isSnaped = Math.abs(sub) < 0.1

  useEffect(() => {
    ref.current?.addEventListener("scroll", (e) => {
      position.value = (e.target as Element).scrollLeft
    })

    width.value = (
      document.documentElement.getBoundingClientRect().width
    )
  }, [])

  useUpdated(() => {
    if (isSnaped) {
      console.log("scroll end")
      onEnd?.((position.value + sub) / width.value)
    } else {
      console.log("scroll start")
      onStart?.((position.value + sub) / width.value)
    }
  }, [isSnaped])

  function useScrollMemo<T>(
    factory: (ref: MutableRefObject<null>) => T,
    deps?: DependencyList
  ): T {
    return useMemo(() => {
      console.log("render")
      return factory(ref as MutableRefObject<null>)
    }, [isSnaped, ...(deps ?? [])])
  }

  return useScrollMemo
}

export const HorizonScroll = ({ children, fixed }: { children: any, fixed?: React.ReactNode }) => {
  const useScrollMemo = useScroll({
    onEnd: (index) => {
      replaceAnchorLinkNumber(() => index)
    }
  })

  const length: number = (children ?? {}).length ?? 0

  const { isAvailableSction } = useAvailableSections()

  const getDisplay = (v: unknown, i: number) => (
    [v, isAvailableSction(i) ? "flex" : "hidden"] as const
  )

  return useScrollMemo(ref => (
    <div ref={ref} className="flex overflow-x-auto section-container" style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>
      {({ 0: [], 1: [children] }[length as 0 | 1] ?? children).map(getDisplay).filter(([_, display]) => display).map(([child, display], i) => (
        <section id={`section${i}`} className={`${display} w-screen h-screen bg-gray-800 justify-center items-center`} style={{ scrollSnapAlign: "start" }} key={i}>
          <div className="box-border w-screen h-screen flex justify-center items-center text-white border-l-2 border-r-2 border-gray-700">
            {child}
            {((i === 0 && fixed) && (fixed))}
          </div>
        </section>
      ))}
    </div>
  ), [children, fixed])
}
