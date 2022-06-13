import type { NextPage } from 'next'
import { Page } from 'components/Page'

const Home: NextPage = () => {
  return (
    <Page>
      <div className='flex justify-between mb-8'>
        <div className='flex flex-col gap-2'>
          <p className='text-secondary-light'>Hey, there. I&apos;m...</p>
          <h1>
            <span className='px-0.5 bg-highlight text-accent'>J.S.</span> Pescasio
          </h1>
          <p className='font-medium'>Software Engineer Based in SoCal</p>
        </div>
        <div className='flex self-center min-w-[8rem] w-32 min-h-[8rem] h-32 rounded-full bg-profile bg-contain bg-no-repeat' />
      </div>
      <div className='flex flex-col gap-8'>
        <p className='text-secondary-light'>
          Pursuing an M.S. in Computer Science @ UCR, revisiting classic video games like Skyrim and The
          Witcher 3: Wild Hunt, and innovating amazing products at a stealth startup.
        </p>
        <p className='text-secondary-light'>
          Want to get in touch? Feel free to email me at hello@jspescas.io.
        </p>
      </div>
    </Page>
  )
}

export default Home
