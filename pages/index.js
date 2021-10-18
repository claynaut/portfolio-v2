import React from 'react'
import Head from 'next/head'
import Container from '../components/Container'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | Home</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div>
          <h1>
            Hello! I&apos;m J.S.
          </h1>
          <p className='my-4'>
            Aspiring software engineer based in Southern California, with a great interest in software and web development.
          </p>
          <p className='my-4'>
            Currently a third-year undergraduate studying Computer Science at UCR. 
            Let&apos;s talk at <a target='_blank' rel='noreferrer noopener' href='https://twitter.com/claynaut'><span className='font-semibold text-accent hover:text-accent-dark cursor-pointer'>hello@jspescas.io</span></a>!
          </p>
        </div>
        <div
          className='flex self-center md:self-end min-w-[15rem] md:min-w-[20rem] w-60 md:w-80 min-h-[15rem] md:min-h-[20rem] h-60 md:h-80 md:ml-4 mb-3 md:mb-0 rounded-xl bg-profile bg-contain bg-no-repeat'
        />
      </section>
    </Container>
  )
}
