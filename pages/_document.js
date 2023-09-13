import { Html, Head, Main, NextScript } from 'next/document'
import Header from './header/Header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
