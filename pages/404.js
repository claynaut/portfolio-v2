import Head from 'next/head'
import Container from '../components/Container'

export default function Error404() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | 404</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div className='w-full'>
          <h1 className='mb-4 font-bold text-4xl text-accent dark:text-accent-dark'>
            404
          </h1>
          <p className='my-4'>
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </section>
    </Container>
  )
}
