import Link from 'next/link'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Element } from 'react-scroll'
import BlogOutline from '../../components/BlogOutline'
import Page from '../../components/Page'

export default function Blog() {
  const blog = [
    {
      title: 'Why Did I Revamp It?',
      value: 'heading1',
      content: [
        'I wanted to try something new (again). And as I learned more in web development since the first time I made my initial portfolio, I wanted to make some more improvements and add more features.',
      ]
    },
    {
      title: 'What\'s New?',
      value: 'heading2',
      content: [],
    },
    {
      title: 'Added Themes',
      value: 'subheading1',
      content: [
        'I always wanted to try making color themes for a website, like light mode and dark mode. So, I finally figured it out and added it to this new portfolio.',
      ]
    },
    {
      title: 'Started a Blog',
      value: 'subheading2',
      content: [
        'Thought that writing a blog would be a new and fun experience for me. I\'m personally not the best at telling stories, so I hope that as I continue writing this blog that I&apos;ll get better at it.',
        'This blog also lets me have something to do on a regular basis (hopefully), other than coding. So, I hope you enjoy reading about my experiences!',
      ]
    },
    {
      title: 'A Cleaner UI/UX',
      value: 'subheading3',
      content: [
        'Personally enjoyed the creative aspect of my previous portfolio with overlaying divs. Yet, I wanted to try making something cleaner while keeping some parts from my previous portfolio, like the side navbar and blurbs.',
        'And I\'m definitely proud of how I redid my Projects and About sections.',
      ]
    },
    {
      title: 'More About Me',
      value: 'subheading4',
      content: [
        'Added more to my About section, so you can learn more about me as a person. Previously, my old portfolio only showcased a few details about what I\'ve done and what I plan to do. Now, I\'d like to share my experiences with a timeline and this blog.',
      ]
    },
  ]

  return (
    <>
      <Page title='Remaking My First Portfolio'>
        <div>
          <h1>
            Remaking My First Portfolio
          </h1>
          <p className='mt-3 text-sm'>
            July 27 2021 • 2 min read
          </p>
          <div className='flex flex-col text-base'>
            { blog.map(({ title, value, content }) =>
              <>
                <Element name={value}>
                  { value.includes('subheading')
                    ? <h3 className='my-2'>{title}</h3>
                    : <h2 className='my-2 mt-4'>{title}</h2>
                  }
                </Element>
                <div className='flex gap-4 flex-col'>
                  { content.map((paragraph) => <p>{paragraph}</p>) }
                </div>
              </>
            )}
          </div>
          <div className='flex w-full justify-between mt-4'>
            <Link passHref href='/blog/making-my-first-portfolio'>
              <div className='flex gap-3 items-center self-center px-3 py-2 rounded-lg bg-nav-accent hover:bg-nav-button text-base text-text-primary cursor-pointer'>
                <BiChevronLeft className='text-xl'/> Previous
              </div>
            </Link>
            <Link passHref href='/blog/joining-biohack'>
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
