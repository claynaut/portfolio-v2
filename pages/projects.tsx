import Page from '@/components/Page'
import { 
  CurrentProjectList,
  UpcomingProjectList,
  PreviousProjectList,
  Toolkit
} from '@/components/Project'
import { BiCategory } from 'react-icons/bi'

export default function Projects() {
  return (
    <Page title='Projects'>
      <div>
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-full bg-accent text-3xl text-accent-dark'>
            <BiCategory />
          </div>
          <h1>Projects</h1>
        </div>
        <h2>Languages and Tools</h2>
        <p className='my-4'>
          Technologies I&apos;m currently using, along with some I&apos;ve had experience working with.
        </p>
        <Toolkit/>
        <h2>In the Works</h2>
        <CurrentProjectList/>
        <h2>Upcoming</h2>
        <UpcomingProjectList/>
        <h2>Previously Done</h2>
        <PreviousProjectList/>
      </div>
    </Page>
  )
}
