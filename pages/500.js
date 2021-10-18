import Head from 'next/head'
import { BiMeteor } from 'react-icons/bi'
import Container from '../components/Container'

export default function Error500() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | 500</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div className='w-full'>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-full bg-accent text-3xl text-accent-dark'>
              <BiMeteor />
            </div>
            <h1>Error 404</h1>
          </div>
          <p className='my-4'>
            Something&apos;s wrong on our end. Check back later.
          </p>
        </div>
      </section>
    </Container>
  )
}
