import Link from 'next/link'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import BlogOutline from '@/components/BlogOutline'
import Page from '@/components/Page'

export default function Blog() {
  const blog = [
    {
      title: 'Learning About BioHack',
      value: 'blog2heading1',
      content: [
        'Near the end of winter break in early January of this year, I curiously scrolled through the announcements in my university\'s computer science-centric Slack, a messaging platform like Discord. One announcement caught my eye — a promotional flyer to join the committees for BioHack, a healthcare hackathon hosted at UCR. Then, I opened the link to spot if any one of the committees interested me, which happened to be the web dev committee.',
        'I thought of trying something new (and learning something new), so I applied to join the web dev committee. And a week or so later, I was accepted and became part of the team.',
      ]
    },
    {
      title: 'A Huge Learning Experience',
      value: 'blog2heading2',
      content: [
        'At the time, I hardly knew anything about building a website, especially the tech stack that BioHack used. I didn\'t know of any frameworks like React and Next.JS, or any development tools like npm and Yarn.',
        'All I knew was basic HTML and CSS. I tried to learn these on my own in an attempt to make a web application for a final project in a computer science class back in high school (which never worked out, so my group and I stuck with using the MIT App Inventor). Other than these two languages, my web development expertise was rather lacking.',
        'Though my web development experience was lacking, my curiosity and motivation to learn wasn\'t. When I first cloned the repository and navigated through the files, I had no clue how to interpret any part of the files which didn\'t involve either HTML or CSS.', 
        'Despite my cluelessness, I started to poke around the code, making edits here and there, just to figure out how each component works. And as I poked around the code, I started solving issues put up on Github. Eventually, with each experimental edit made and issue resolved, I familiarized myself with the framework and how developing a website worked.',
      ],
    },
    {
      title: 'Moving Forward',
      value: 'blog2heading3',
      content: [
        'Over the span of a few months, from beginning of January to the end of April, I contributed greatly to the frontend development of the BioHack website. I styled most of the sections, set up components like accordions, and developed the scaffolding for the live page.',
        'From my time spent in the BioHack web dev committee, I went from barely knowing HTML and CSS to knowing enough to build my own website (which I did in February, about a month after I joined BioHack). Even though I learned a lot in a short span of time, I still wanted to learn more and expand my experience. So since then, I\'ve tried out for web dev lead positions for various hackathons at UCR, revamped my portfolio, and started designing a web application that I plan to develop in the long term.',
        'Joining BioHack has inspired my desire to try things out and continue learning, and I hope to never stop learning.',
      ]
    },
  ]

  return (
    <>
      <Page title='Joining BioHack'>
        <div>
          <h1>
            Joining BioHack
          </h1>
          <p className='mt-3 text-sm'>
            Aug 02 2021 • 3 min read
          </p>
          <div className='flex flex-col text-base'>
            { blog.map(({ title, value, content }) =>
              <>
                <div id={value}>
                  { value.includes('subheading')
                    ? <h3 className='my-2'>{title}</h3>
                    : <h2 className='my-2 mt-4'>{title}</h2>
                  }
                </div>
                <div className='flex gap-4 flex-col'>
                  { content.map((paragraph) => <p>{paragraph}</p>) }
                </div>
              </>
            )}
          </div>
          <div className='flex w-full justify-between mt-4'>
            <Link passHref href='/blog/remaking-my-portfolio'>
              <div className='flex gap-3 items-center self-center px-3 py-2 rounded-lg bg-nav-accent hover:bg-nav-button text-base text-text-primary cursor-pointer'>
                <BiChevronLeft className='text-xl'/> Previous
              </div>
            </Link>
            <Link passHref href='/blog/trying-out-for-web-dev-lead'>
              <div className='flex gap-3 items-center self-center px-3 py-2 rounded-lg bg-nav-accent hover:bg-nav-button text-base text-text-primary cursor-pointer'>
                Next <BiChevronRight className='text-xl'/>
              </div>
            </Link>
          </div>
        </div>
      </Page>
      <BlogOutline bookmarks={blog} />
    </>
  )
}
