import Head from 'next/head'
import Container from '../../components/Container'

export default function Error500() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | 500</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div className='w-full'>
          <h1 className='mb-4 font-bold text-4xl text-accent dark:text-accent-dark'>
            500
          </h1>
          <p className='my-4'>
            Something&apos;s wrong on our end. Check back later.
          </p>
        </div>
      </section>
    </Container>
  )
}
