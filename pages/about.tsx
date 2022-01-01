import { BiUserCircle } from 'react-icons/bi'
import Page from '@/components/Page'
import { Timeline } from '@/components/Timeline'
import ExternalLink from '@/components/ExternalLink'

export default function About() {
  const interests = [
    'Art',
    'Storytelling',
    'Graphic Design',
    'KBBQ',
    'Indie Pop',
    'Japanese Rock',
    'Korean R&B',
    'Nintendo',
    'Indie Video Games',
    'Horror Movies',
    'Crime TV Shows',
    'Period Piece Dramas',
    'Musicals',
    'Swords',
    'Guitar',
    'Ukelele',
    'Traveling',
  ]

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
        <div className='flex flex-wrap gap-1.5 font-semibold text-sm'>
          { interests.map((interest) =>
            <div className='px-2.5 py-1 rounded-md bg-accent text-accent-darkest'>
              {interest}
            </div>
          )}
        </div>
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
