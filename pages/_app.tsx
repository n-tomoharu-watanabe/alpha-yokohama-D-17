import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import "github-markdown-dracula-css"
import "../styles/tailwind-base.css"
import "../styles/globals.css"
import "../styles/tailwind-utils.css"

import { Store } from '../lib/store'
import { replaceAnchorLinkNumber } from '../utils/anchor-link'
import { useProxyRef } from '../utils/use-proxy-ref'
import { useEffected } from '../utils/use-effected'
import { ModalTransition } from '../components/Modal'

const AppContainer = (props: AppProps) => (
  <Store.Provider>
    <App {...props} />
  </Store.Provider>
)

const App = ({ Component, pageProps }: AppProps) => {
  const [_store, setStore] = Store.useWithSet()
  const store = useProxyRef(_store)

  useEffect(() => {
    setStore({ state: { section: [0] } })

    if (!window.location.hash) {
      window.location.hash = "section0"
    }

    window.addEventListener("hashchange", () => {
      replaceAnchorLinkNumber(n => (
        store.state.section.includes(n) ? n : 0
      ))
    })
  }, [])

  useEffected(() => {
    replaceAnchorLinkNumber(n => (
      0 // 初期では、0に飛ばすように一時変更
      // store.state.section.includes(n) ? n : 0
    ))
  }, [])

  return (
    <>
      <Head>
        <title>映画からの脱出 at BEVERLY HILLS</title>
      </Head>

      <div>
        <Component {...pageProps} />

        <ModalTransition>
          {store.modal}
        </ModalTransition>
      </div>
    </>
  )
}

export default AppContainer