import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import "../styles/globals.css"
import "github-markdown-dracula-css"

import { useStoreProvider } from '../utils/use-store-provider'
import { replaceAnchorLinkNumber } from '../utils/anchor-link'

const [StoreProvider, StoreHooks] = useStoreProvider(() => (
  { state: { section: [0, 1, 2] } }
))

export const { useStore, useUpdateStore } = StoreHooks

const AppContainer = (props: AppProps) => (
  <StoreProvider>
    <App {...props} />
  </StoreProvider>
)

const App = ({ Component, pageProps }: AppProps) => {
  const store = useStore()

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "section0"
    }

    replaceAnchorLinkNumber(n => (
      store.state.section.includes(n) ? n : 0
    ))

    window.addEventListener("hashchange", () => {
      replaceAnchorLinkNumber(n => (
        store.state.section.includes(n) ? n : 0
      ))
    })
  }, [])

  return (
    <>
      <Head>
        <title>ビバリーヒルズからの脱出</title>
      </Head>

      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default AppContainer