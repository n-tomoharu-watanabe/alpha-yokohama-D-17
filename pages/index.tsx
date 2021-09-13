import React, { useEffect, useState } from "react"

import { HorizonCcroll } from "./horizon-sccroll"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SideButton } from "../components/SideButton"

import { useUpdateStore } from "./_app"
import { getAnchorLink, replaceAnchorLinkNumber } from "../utils/anchor-link"

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
  const sections = steps.map((step, i) => [step, ...(mdxModules[i]?.default ?? [])]).flat()

  const [store, updateStore] = useUpdateStore()

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
          replaceAnchorLinkNumber(n => store.state.section.includes(n - 1) ? n - 1 : n)
        }} disabled={
          !isFirst ? !store.state.section.includes(nowSection - 1) : false
        }>◀︎</SideButton>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <SideButton onClick={() => {
          replaceAnchorLinkNumber(n => store.state.section.includes(n + 1) ? n + 1 : n)
        }} disabled={
          !isFirst ? !store.state.section.includes(nowSection + 1) : false
        }>▶︎</SideButton>
        <br />
        <SideButton onClick={() => {
          updateStore(({ state }) => state.section.push(state.section.length))
        }}>+</SideButton>
      </div>
    </>
  )

  return (
    <div>
      <HorizonCcroll fixed={fixed}>
        {sections.map((Section, i) => <div key={i} className="markdown-body"><Section key={i} /></div>)}
      </HorizonCcroll>
    </div>
  )
}

export default Page