import Page from '@/components/Page'
import { 
  CurrentProjectList,
  UpcomingProjectList,
  PreviousProjectList
} from '@/components/Project'
import { BiCategory } from 'react-icons/bi'

export default function Projects() {
  const stack = [
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'C++',
    'Python',
    'Java',
    'Next.JS',
    'React',
    'TailwindCSS',
    'CSS Modules',
    'Framer Motion',
    'MaterialUI',
    'Axios',
    'MongoDB',
    'Prisma',
    'React Hook Forms',
    'SendGrid',
  ]

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
        <div className='flex flex-wrap gap-1.5 font-semibold text-sm'>
          { stack.map((tech) =>
            <div className='px-2.5 py-1 rounded-md bg-accent text-accent-darkest'>
              {tech}
            </div>
          )}
        </div>
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
