import Head from 'next/head'
import Layout from './Layout'
import Footer from './Footer'

export default function Container({ title, children }) {
  return (
    <Layout>
      <Head>
        <title>J.S. Pescasio { title && ('| ' + title) }</title>
      </Head>
      <container className='flex flex-col justify-between mt-24 mb-6 xl:my-4 xl:p-6 rounded-lg xl:bg-primary xl:shadow-shadow'>
        <section className='flex flex-col-reverse md:flex-row w-full'>
          {children}
        </section>
        <Footer />
      </container>
    </Layout>
  )
}
