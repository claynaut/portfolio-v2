import Head from 'next/head'
import { Sidebar } from './Sidebar'

interface Props {
  title?: string
  children: React.ReactNode | React.ReactNode[]
}

export const Page = ({ title, children }: Props) => {
  return (
    <main className='flex flex-col w-full px-4 justify-center items-center min-h-screen'>
      <Head>
        <title>J.S. Pescasio {title && '| ' + title}</title>
      </Head>
      <section className='flex w-full gap-8 mt-24 max-w-[64rem]'>
        <div className='w-full'>{children}</div>
        <Sidebar />
      </section>
    </main>
  )
}
