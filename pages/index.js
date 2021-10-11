import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../components/Container'
import Footer from '../components/Footer'
import profile from '../public/assets/profile.png'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | Home</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div>
          <h1 className='mb-4 font-bold text-4xl text-accent dark:text-accent-dark'>
            Hello! I&apos;m J.S.
          </h1>
          <p className='my-4'>
            Aspiring software engineer based in Southern California, with a great interest in software and web development.
          </p>
          <p className='my-4'>
            Currently a third-year undergraduate studying Computer Science at UCR. 
            Let&apos;s talk at <Link passHref href='https://twitter.com/claynaut'><span className='font-semibold text-accent dark:text-accent-dark cursor-pointer'>hello@jspescas.io</span></Link>!
          </p>
        </div>
        <div className='flex justify-center md:justify-end md:ml-4 mb-3 md:mb-0'>
          <Image 
            src={profile}
            alt='Profile Picture'
            layout='fixed'
            objectFit='contain'
            width={280}
            height={280}
            quality={100}
            placeholder='blur'
            className='rounded-lg'
          />
        </div>
      </section>
      <Footer />
    </Container>
  )
}
