import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import "../styles/globals.css"
import "github-markdown-dracula-css"

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    console.log("onload")

    if (!window.location.hash) {
      window.location.hash = "section0"
    }

    // ToDo: LocalStorageの履歴などから、飛んでいいかどうか確認
    if (0 < Number(window.location.hash.match(/\d+/)?.[0] ?? 0)) {
      window.location.hash = "section0"
    }
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

export default App