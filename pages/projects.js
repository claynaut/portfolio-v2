import { BiCategory } from 'react-icons/bi'
import Page from '../components/Page'
import ProjectBlurb from '../components/ProjectBlurb'

export default function Projects() {
  const current = [
    {
      link: 'https://jspescas.io',
      title: 'Portfolio',
      date: 'July 2021 - Present',
      caption: 'Revamping my first portfolio, with new styles and more features.',
      stack: [
        'Next.JS',
        'TailwindCSS',
        'Framer Motion',
      ],
      external: true,
    },
    {
      link: 'https://claynaut.io',
      title: 'Alternate Portfolio',
      date: 'October 2021 - Present',
      caption: 'Creating an alternate portfolio for fun, designed with a different UI/UX.',
      stack: [
        'Next.JS',
        'TailwindCSS',
        'Framer Motion',
      ],
      external: true,
    },
    {
      link: 'https://cutiehack.io/',
      title: 'Cutie Hack 2021 Website',
      date: 'June 2021 - Present',
      caption: 'Developing the frontend and the backend of the website for Cutie Hack, a beginner-oriented hackathon at UCR.',
      stack: [
        'Next.JS',
        'CSS Modules',
        'Framer Motion',
        'MongoDB',
        'TypeScript',
        'SendGrid',
      ],
      external: true,
    },
    {
      link: 'https://prytaneum.io/',
      title: 'Prytaneum',
      date: 'August 2021 - Present',
      caption: 'Developing the frontend of Prytaneum providing a unique platform for town officials and their constituents, promoting a better democracy.',
      stack: [
        'Next.JS',
        'MaterialUI',
        'TypeScript',
        'Prisma',
      ],
      external: true,
    },
    {
      link: 'https://lotushacks.com/',
      title: 'Lotus Hacks 2021 Website',
      date: 'July 2021 - Present',
      caption: 'Designing and developing the website for Lotus Hacks, the first hardware hackathon at UCR.',
      stack: [
        'Next.JS',
        'TailwindCSS',
        'CSS Modules',
        'Framer Motion',
        'React Hook Forms',
        'MongoDB',
        'TypeScript',
        'Axios',
      ],
      external: true,
    },
    {
      link: '/projects',
      title: 'BioHack 2022 Website',
      date: 'July 2021 - Present',
      caption: 'Building the website for BioHack, a healthcare hackathon at UCR.',
      stack: [
        'Next.JS',
        'TailwindCSS',
        'Framer Motion',
        'React Hook Forms',
        'MongoDB',
        'TypeScript',
        'Axios',
      ],
      external: false,
    },
    {
      link: '/projects',
      title: 'IEJL Website',
      date: 'August 2021 - Present',
      caption: 'Developing the redesign of International Economic Justice League\'s (IEJL) website, with a small team of developers working remotely.',
      stack: [
        'Gatsby.JS',
        'TailwindCSS',
      ],
      external: false,
    },
    {
      link: '/projects',
      title: 'A Web Planner App',
      date: 'July 2021 - Present',
      caption: 'Building a web application on a larger scale than I\'ve done before. Geared towards anyone who organizes their day on the go.',
      stack: [
        'Next.JS',
        'TailwindCSS',
        'Framer Motion',
        'SWR',
        'React Hook Forms',
        'MongoDB',
        'TypeScript',
        'Axios',
      ],
      external: false,
    },
  ]

  const upcoming = [
    {
      link: '/projects',
      title: 'Citrus Hack 2022 Website',
      date: 'TBD',
      caption: 'Designing and developing the website for Citrus Hack, a large-scale hackathon at UCR.',
      stack: [
        'Next.JS',
        'TailwindCSS',
        'Framer Motion',
        'React Hook Forms',
        'MongoDB',
        'TypeScript',
        'Axios',
      ],
      external: false,
    },

  ]

  const completed = [
    {
      link: 'https://dota-2-analyzer-frontend.vercel.app/',
      title: 'Dota 2 Analyzer',
      date: 'Jan 2021 - May 2021',
      caption: 'Built the frontend of a web application using an in-memory database, used to analyze statistics for Dota 2. Developed as a final project with a team of four, for a Software Engineering course.',
      stack: [
        'React',
        'CSS Modules',
        'Axios',
      ],
      external: true,
    },
    {
      link: 'https://jspescasio-fe.vercel.app/',
      title: 'First Portfolio',
      date: 'Jan 2021 - July 2021',
      caption: 'Built my first website using Gatsby. Wanted to develop a website from scratch, trying out different frameworks.',
      stack: [
        'Gatsby.JS',
        'CSS Modules',
        'Framer Motion',
      ],
      external: true,
    },
    {
      link: 'https://biohack2021-jsdev.vercel.app/',
      title: 'BioHack 2021 Website',
      date: 'Jan 2021 - May 2021',
      caption: 'Helped develop the frontend for the BioHack website with the web dev committee.',
      stack: [
        'Next.JS',
        'CSS Modules',
      ],
      external: true,
    },
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
        <h2>In the Works</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          { current.map(({ link, title, date, caption, stack, external }) =>
            <ProjectBlurb
              link={link}
              title={title}
              date={date}
              caption={caption}
              stack={stack}
              external={external}
            />
          )}
        </div>
        <h2>Upcoming</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          { upcoming.map(({ link, title, date, caption, stack, external }) =>
            <ProjectBlurb
              link={link}
              title={title}
              date={date}
              caption={caption}
              stack={stack}
              external={external}
            />
          )}
        </div>
        <h2>Completed</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          { completed.map(({ link, title, date, caption, stack, external }) =>
            <ProjectBlurb
              link={link}
              title={title}
              date={date}
              caption={caption}
              stack={stack}
              external={external}
            />
          )}
        </div>
      </div>
    </Page>
  )
}
