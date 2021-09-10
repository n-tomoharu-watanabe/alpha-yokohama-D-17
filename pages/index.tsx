import React from "react"
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

  return (
    <div>
      <HorizonCcroll>
        {sections.map((Section, i) => <div key={i} className="markdown-body"><Section key={i} /></div>)}
      </HorizonCcroll>
    </div>
  )
}

export default Page