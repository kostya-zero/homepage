import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Konstantin Zero</title>
      </Head>
      <body>
        <a rel="me" href="https://mastodon.ml/@kostya_zer0" hidden>Mastodon</a>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
