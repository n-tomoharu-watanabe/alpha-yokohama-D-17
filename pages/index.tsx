import React, { useEffect, useMemo, useState } from "react"

import { HorizonScroll } from "../components/HorizonCcroll"

import { Store } from "../lib/store"
import { getAnchorLink } from "../utils/anchor-link"
import { useAvailableSections } from "../lib/use-available-sections"
import { PageNav } from "../components/PageNav"

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

function importAll(context: __WebpackModuleApi.RequireContext) {
  return context.keys().map((e: string) => context(e))
}

interface MDXModule {
  default: React.VFC<any>[]
}

interface TSXModule {
  default: React.ReactElement
}

const useAnchorLinkNumber = () => {
  const [state, setState] = useState<number>(0)

  useEffect(() => {
    setState(Number(getAnchorLink().match(/\d+$/gm) ?? 0))

    window.addEventListener("hashchange", () => {
      setState(Number(getAnchorLink().match(/\d+$/gm) ?? 0))
    })
  }, [])

  return state
}

export function useIsFirst(): boolean {
  const [flag, setFlag] = useState<boolean>(true)

  if (flag) {
    setFlag(false)
    return true
  } else {
    return false
  }
}

export const Page = () => {
  const mdxModules: MDXModule[] = importAll(require.context("../assets/between-steps"))
  const tsxModules: TSXModule[] = importAll(require.context("../assets/steps")).filter((_, i) => i % 2)

  // eslint-disable-next-line react/display-name
  const steps = range(tsxModules.length).map((_, i) => (() => tsxModules[i].default))

  const sections = steps.map((step, i) => [
    { type: "step", Section: step },
    ...(mdxModules[i]?.default ?? [])
      .map(v => ({ type: "between-step", Section: v }))
  ]).flat()

  const {
    isAvailableSction,
    moveToAvailableSection,
  } = useAvailableSections()

  const isFirst = useIsFirst()
  const nowSection = useAnchorLinkNumber()

  const store = Store.use()

  const SectionElements = useMemo(() => (
    sections.map(({ type, Section, }, i) => (
      <div key={i} className={`markdown-body section-type-${type}`}>
        <Section key={i} />
      </div>
    ))
  ), [store])

  return (
    <div>
      <HorizonScroll fixed={(
        <PageNav
          disabledSideButton={i => !isFirst ? !isAvailableSction(nowSection + i) : false}
          onClickSideButton={i => moveToAvailableSection(n => n + i)}
        />
      )}>
        {SectionElements}
      </HorizonScroll>
    </div>
  )
}

export default Page