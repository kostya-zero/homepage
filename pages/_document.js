import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Konstantin Zero</title>
      </Head>
      <body>
        <a rel="me" href="https://md.debilosempire.org/@kostya_zero" display="hidden">Mastodon</a>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
