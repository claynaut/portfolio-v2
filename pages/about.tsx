import { BiUserCircle } from 'react-icons/bi'
import Page from '@/components/Page'
import InterestList from '@/components/InterestList'
import { Timeline } from '@/components/Timeline'
import ExternalLink from '@/components/ExternalLink'

export default function About() {
  return (
    <Page title='About'>
      <div>
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-full bg-accent text-3xl text-accent-dark'>
            <BiUserCircle />
          </div>
          <h1>About</h1>
        </div>
        <p className='my-4'>
          Other than coding, I spend my free time doing my other interests and hobbies.
        </p>
        <InterestList/>
        <p className='my-4'>
          I&apos;m also known as claynaut, my pen name for anything art-related. See most of my artworks on <ExternalLink name='Twitter' link='https://twitter.com/claynaut'/>.
        </p>
        <p className='my-4'>
          See what I&apos;ve done and where I&apos;ve gone, with this timeline of my experiences.
        </p>
        <Timeline/>
      </div>
    </Page>
  )
}
