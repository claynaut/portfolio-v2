import Head from 'next/head'

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
      <section className='w-full max-w-[60rem]'>{children}</section>
    </main>
  )
}
