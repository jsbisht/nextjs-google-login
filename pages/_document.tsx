import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { Props } from '../types/Props'

export default function Layout({ children }: Props) {
  return (
    <Html>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        ></Script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}