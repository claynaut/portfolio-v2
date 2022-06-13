import type { NextPage } from 'next'
import { Page } from 'components/Page'

const Projects: NextPage = () => {
  return (
    <Page title='Projects'>
      <div className='flex flex-col gap-2'>
        <h1>Projects</h1>
        <p className='text-secondary-light'>
          A collection of some projects I&apos;ve worked on.
        </p>
      </div>
      <div>
        <h2>Current</h2>
      </div>
      <div>
        <h2>Previous</h2>
      </div>
      <div>
        <h2>Upcoming</h2>
      </div>
    </Page>
  )
}

export default Projects
