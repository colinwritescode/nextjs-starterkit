/* istanbul ignore file */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'regenerator-runtime/runtime'
import './../../static/fonts.css'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS StarterKit</title>
        <link rel="shortcut icon" href="/base/favicon.ico" />
        <link rel="apple-touch-icon" href="/base/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="NextJS StarterKit" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
//
