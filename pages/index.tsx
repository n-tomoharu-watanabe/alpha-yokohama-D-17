import React from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SideButton } from "../components/SideButton"
import { replaceAnchorLinkNumber } from "../utils/anchor-link"
import { HorizonCcroll } from "./horizon-sccroll"

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

function importAll(context: __WebpackModuleApi.RequireContext) {
  return context.keys().map((e: string) => context(e))
}

interface MDXModule {
  default: React.VFC<any>[]
}

export const Page = () => {
  const modules: MDXModule[] = importAll(require.context("../assets/steps"))

  // eslint-disable-next-line react/display-name
  const steps = range(modules.length + 1).map(i => () => <h1>Step{i + 1}</h1>)
  const sections = steps.map((step, i) => [step, ...(modules[i]?.default ?? [])]).flat()

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
          replaceAnchorLinkNumber(n => Math.max(n - 1, 0))
        }}>◀︎</SideButton>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <SideButton onClick={() => {
          replaceAnchorLinkNumber(n => n + 1)
        }}>▶︎</SideButton>
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