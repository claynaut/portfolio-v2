import Head from 'next/head'
import {
  BiStar,
  BiAward,
  BiCog,
  BiBoltCircle,
  BiDesktop,
  BiCodeAlt, 
  BiWorld, 
  BiCake,
  BiJoystick,
  BiPalette,
  BiUserCircle
} from 'react-icons/bi'
import Container from '../components/Container'
import TimeBlurb from '../components/TimeBlurb'
import TimeAccordion from '../components/TimeAccordion'
import ExternalLink from '../components/ExternalLink'

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

  const timelines = [
    {
      year: 2021,
      length: 'xl',
      events: [
        {
          icon: <BiCog />,
          title: 'Created an Alternate Portfolio',
          caption: 'Designed and developed a second portfolio for fun with a different theme. Check it out under my projects.',
        },
        {
          icon: <BiBoltCircle />,
          title: 'Switched to TailwindCSS',
          caption: 'Refactored my portfolio and switched to using mostly TailwindCSS, a new preference.',
        },
        {
          icon: <BiStar />,
          title: 'Upgraded my First Keyboard',
          caption: 'Switched to Boba U4T switches lubed with Krytox 205g0. Unbeatable sound and feel.',
        },
        {
          icon: <BiBoltCircle />,
          title: 'Joined IEJL',
          caption: 'Volunteered to be a frontend developer to help redesign the site for the International Economic Justice League (IEJL).',
        },
        {
          icon: <BiCog />,
          title: 'Built my Second Keyboard',
          caption: 'A compact GMMK with Glorious Holy Panda switches and a combination of GPBT keycaps and MiTo GMK Laser keycaps. Digging the look and the feel.',
        },
        {
          icon: <BiCog />,
          title: 'Built my First Keyboard',
          caption: 'A compact GMMK with Invyr Holy Panda switches and GMK Red Samurai keycaps. Never heard a more satisfying click.',
        },
        {
          icon: <BiBoltCircle />,
          title: 'Joined Prytaneum',
          caption: 'A project led by the School of Public Policy at University of California, Riverside, developing a unique platform for a better democracy. Excited to get more experience in something I enjoy doing.',
        },
        {
          icon: <BiStar />,
          title: 'Revamped my Portfolio',
          caption: 'Rebuilt with Next.JS, trying out some new features.',
        },
        {
          icon: <BiCog />,
          title: 'Built my First PC',
          caption: 'Finally, after GPUs started coming back in stock.',
        },
        {
          icon: <BiStar />,
          title: 'Web Dev Lead',
          caption: 'Spearheaded the development for the Cutie Hack, Citrus Hack, Lotus Hacks, BioHack websites, getting outside of my comfort zone.',
        },
        {
          icon: <BiBoltCircle />,
          title: 'Started Learning Python',
          caption: 'Hopefully going to make an app using this.',
        },
        {
          icon: <BiBoltCircle />,
          title: 'Started Playing Guitar',
          caption: 'Tried something new just for fun, and still practicing.',
        },
        {
          icon: <BiCog />,
          title: 'Built my First Portfolio',
          caption: 'Diving deeper in web development, and trying out Gatsby.',
        },
        {
          icon: <BiBoltCircle />,
          title: 'Joined BioHack',
          caption: 'Built the frontend for the BioHack website. Wanted to try something new, and I loved it.',
        }
      ],
    },
    {
      year: 2020,
      length: 'sm',
      events: [
        {
          icon: <BiBoltCircle />,
          title: 'Started Learning ASL',
          caption: 'For once, not a programming language.',
        },
        {
          icon: <BiDesktop />,
          title: 'Online Classes',
          caption: 'Learning online, what a challenge.',
        },
      ],
    },
    {
      year: 2019,
      length: 'sm',
      events: [
        {
          icon: <BiWorld />,
          title: 'Traveled to Japan',
          caption: 'Hoping to go again.',
        },
        {
          icon: <BiAward />,
          title: 'Admitted to University of California, Riverside',
          caption: 'Majoring in Computer Science.',
        },
        {
          icon: <BiAward />,
          title: 'Graduated High School',
          caption: 'Farewell, Fullerton. Hello, Riverside',
        },
      ],
    },
    {
      year: 2018,
      length: 'sm',
      events: [
        {
          icon: <BiCodeAlt />,
          title: 'Learned How to Code in C++',
          caption: 'Greeting the world in another language.',
        },
        {
          icon: <BiStar />,
          title: 'Completed my First Internship',
          caption: 'Spent the summer in Los Angeles as a QA intern, squashing bugs.',
        },
      ],
    },
    {
      year: 2015,
      length: 'sm',
      events: [
        {
          icon: <BiCodeAlt />,
          title: 'Learned How to Code in Java',
          caption: 'Greeted the world with System.out.println("Hello World!").',
        },
      ],
    },
    {
      year: 2014,
      length: 'sm',
      events: [
        {
          icon: <BiPalette />,
          title: 'Got my First Drawing Tablet',
          caption: 'A Wacom Intuos Pro Medium. Still using it to this day.',
        },
      ],
    },
    {
      year: 2008,
      length: 'sm',
      events: [
        {
          icon: <BiJoystick />,
          title: 'Got my First Nintendo DS',
          caption: 'Started playing Pokemon, the start of my video gaming hobby.',
        },
      ],
    },
    {
      year: 2006,
      length: 'sm',
      events: [
        {
          icon: <BiWorld />,
          title: 'Immigrated to USA',
          caption: 'Moved to Southern California and stayed there since.',
        },
      ],
    },
    {
      year: 2001,
      length: 'sm',
      events: [
        {
          icon: <BiCake />,
          title: 'Born',
          caption: 'In Manila, Philippines.',
        },
      ],
    },
  ]

  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | About</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
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
          { timelines.map(({year, length, events}) =>
            <TimeAccordion
              year={year}
              length={length}
            >
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-full pl-7'>
                { events.map(({icon, title, caption}) =>
                  <TimeBlurb
                    icon={icon}
                    title={title}
                    caption={caption}
                  />
                )}
              </div>
            </TimeAccordion>
          )}
        </div>
      </section>
    </Container>
  )
}
