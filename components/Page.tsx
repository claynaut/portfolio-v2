import Head from 'next/head'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

interface Props {
  title: string
  children: React.ReactNode | React.ReactNode[]
}

export default function Page({ title, children }: Props) {
  return (
    <Layout>
      <Head>
        <title>J.S. Pescasio { title && ('| ' + title) }</title>
      </Head>
      <div className='flex flex-col justify-between mt-24 mb-6 xl:my-4 xl:p-6 rounded-lg xl:bg-primary xl:shadow-shadow'>
        <section className='flex flex-col-reverse md:flex-row w-full'>
          {children}
        </section>
        <Footer />
      </div>
    </Layout>
  )
}
