import type { NextPage } from 'next'
import { Page } from 'components/Page'
import { ExternalLink } from 'components/ExternalLink'

const Home: NextPage = () => {
  return (
    <Page>
      <div className='flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-6'>
        <div className='flex flex-col gap-2'>
          <p className='hidden sm:block text-secondary-light'>
            Hey, there. I&apos;m...
          </p>
          <h1>
            <span className='px-0.5 bg-highlight text-accent'>J.S.</span>{' '}
            Pescasio
          </h1>
          <p>
            <span className='font-semibold'>Software Engineer</span> Based in
            SoCal
          </p>
        </div>
        <div className='flex mb-3 sm:mb-0'>
          <div className='flex self-center min-w-[6.5rem] sm:min-w-[8rem] w-[6.5rem] sm:w-32 min-h-[6.5rem] sm:min-h-[8rem] h-[6.5rem] sm:h-32 rounded-full bg-profile bg-contain bg-no-repeat' />
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-secondary-light'>
          Pursuing an M.S. in Computer Science @ UCR, revisiting classic video
          games like Skyrim and The Witcher 3: Wild Hunt, and innovating amazing
          products at a stealth startup.
        </p>
        <p className='text-secondary-light'>
          Want to get in touch? Feel free to email me at{' '}
          <ExternalLink
            href='mailto:hello@jspescas.io'
            label='hello@jspescas.io'
          />
          .
        </p>
      </div>
    </Page>
  )
}

export default Home
