import { DependencyList, EffectCallback, MutableRefObject, useEffect, useRef, useState } from "react"

import { useStore } from "./_app"
import { replaceAnchorLinkNumber } from "../utils/anchor-link"

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

const useDocumentRect = () => {
  const [state, setState] = useState<DOMRect | undefined>(undefined)

  useEffect(() => {
    if (document) setState(document.documentElement.getBoundingClientRect())
  }, [])

  return state
}

const usePassEffect = (length: number, effect: EffectCallback, deps?: DependencyList) => {
  const count = useRef(0)

  useEffect(() => {
    if (count.current < length) {
      count.current = count.current + 1
    } else {
      effect()
    }
  }, deps)
}

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

const useOnScroll = ({ start, end }: { start?: any, end?: any } = {}) => {
  const ref = useRef<HTMLElement>(null)

  const position = useRefState<number>(0)

  const document = useDocumentRect()
  const width = document?.width ?? 0

  useEffect(() => {
    ref.current?.addEventListener("scroll", (e) => {
      position.value = (e.target as Element).scrollLeft
    })
  }, [])

  const sub = ((position.value % width < width / 2) ? 0 : width) - (position.value % width)
  const isSnaped = Math.abs(sub) < 0.1

  usePassEffect(2, () => {
    if (isSnaped) {
      console.log("scroll end")
      replaceAnchorLinkNumber(() => (position.value + sub) / width)
    } else {
      console.log("scroll start")
    }
  }, [isSnaped])

  return ref as MutableRefObject<null>
}

export const HorizonCcroll = ({ children, fixed }: { children: any, fixed?: React.VFC }) => {
  const ref = useOnScroll()
  const length: 0 | 1 | 2 = (children ?? {}).length ?? 0
  const FixedComponent = fixed

  const store = useStore()

  const predicate = (_: unknown, i: number) => (
    store.state.section.length ? store.state.section.includes(i) : true
  )

  return (
    <div ref={ref} className="flex overflow-x-auto" style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>
      {({ 0: [], 1: [children] }[length as 0 | 1] ?? children).filter(predicate).map((child, i) => (
        <section id={`section${i}`} className="w-screen h-screen bg-gray-800 flex justify-center items-center" style={{ scrollSnapAlign: "start" }} key={i}>
          <div className="box-border w-screen h-screen flex justify-center items-center text-white border-l-2 border-r-2 border-gray-700">
            {child}
            {((i === 0 && FixedComponent) && (<FixedComponent />))}
          </div>
        </section>
      ))}
    </div>
  )
}

export const Page = () => {
  return (
    <HorizonCcroll>
      <div>Hello1</div>
      <div>Hello2</div>
      <div>Hello3</div>
      <div>Hello4</div>
    </HorizonCcroll>
  )
}

export default Page