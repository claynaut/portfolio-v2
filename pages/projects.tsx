import type { NextPage } from 'next'
import { Page } from 'components/Page'

const Projects: NextPage = () => {
  return (
    <Page title='Projects'>
      <div className='flex flex-col gap-2'>
        <h2>Projects</h2>
        <p className='text-secondary-light'>
          A collection of some projects I&apos;ve worked on.
        </p>
      </div>
      <div>
        <h3>Current</h3>
      </div>
      <div>
        <h3>Previous</h3>
      </div>
      <div>
        <h3>Upcoming</h3>
      </div>
    </Page>
  )
}

export default Projects
