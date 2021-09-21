import React, { useState } from "react"

import { HorizonScroll } from "../components/HorizonCcroll"

import { PageNav } from "../components/PageNav"
import { ReactMemo } from "../components/ReactHook"

import { Store } from "../lib/store"
import { useAvailableSections } from "../lib/use-available-sections"
import { useAnchorLinkNumber } from "../utils/use-ancher-link"

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

  return (
    <HorizonScroll fixed={(
      <PageNav
        disabledSideButton={i => !isFirst ? !isAvailableSction(nowSection + i) : false}
        onClickSideButton={i => moveToAvailableSection(n => n + i)}
      />
    )}>
      {sections.map(({ type, Section, }, i) => (
        <div key={i} className={`markdown-body section-type-${type}`}>
          <ReactMemo deps={[store]}>{() => (
            <Section key={i} />
          )}</ReactMemo>
        </div>
      ))}
    </HorizonScroll>
  )
}

export default Page