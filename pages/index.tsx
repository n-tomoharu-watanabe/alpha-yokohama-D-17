import React, { useEffect, useState } from "react"

import { HorizonCcroll } from "./horizon-sccroll"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SideButton } from "../components/SideButton"

import { getAnchorLink } from "../utils/anchor-link"
import { useAvailableSections } from "../lib/use-available-sections"

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
    addNextStepToAvailableSections
  } = useAvailableSections()

  const isFirst = useIsFirst()
  const nowSection = useAnchorLinkNumber()

  const fixed = () => (
    <>
      <div className="fixed top-0">
        <Header />
      </div>

      <div className="fixed bottom-0">
        <Footer />
      </div>

      <div className="fixed left-0 top-1/2 transform -translate-y-1/2">
        <SideButton onClick={() => {
          moveToAvailableSection(n => n - 1)
        }} disabled={
          !isFirst ? !isAvailableSction(nowSection - 1) : false
        }>◀︎</SideButton>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <SideButton onClick={() => {
          moveToAvailableSection(n => n + 1)
        }} disabled={
          !isFirst ? !isAvailableSction(nowSection + 1) : false
        }>▶︎</SideButton>
        <br />
        <SideButton onClick={() => {
          addNextStepToAvailableSections()
        }}>+</SideButton>
      </div>
    </>
  )

  return (
    <div>
      <HorizonCcroll fixed={fixed}>
        {sections.map(({ type, Section, }, i) => (
          <div key={i} className={`markdown-body section-type-${type}`}>
            <Section key={i} />
          </div>
        ))}
      </HorizonCcroll>
    </div>
  )
}

export default Page