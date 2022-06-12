import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' className='m-0 p-0 box-border overflow-x-hidden'>
        <Head>
          <meta
            name='description'
            content='Portfolio for J.S. Pescasio, a software engineer based in Southern California.'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='text-lg'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
