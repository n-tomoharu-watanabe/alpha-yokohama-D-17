import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import "github-markdown-dracula-css"
import "../styles/globals.css"

import { Store } from '../lib/store'
import { replaceAnchorLinkNumber } from '../utils/anchor-link'
import { useProxyRef } from '../utils/use-proxy-ref'
import { useEffected } from '../utils/use-effected'
import { ModalContainer } from '../components/Modal'

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
        <title>ビバリーヒルズからの脱出</title>
      </Head>

      <div>
        <Component {...pageProps} />

        {store.modal && (
          <ModalContainer>
            {store.modal}
          </ModalContainer>
        )}
      </div>
    </>
  )
}

export default AppContainer