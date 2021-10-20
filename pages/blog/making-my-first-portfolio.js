import Link from 'next/link'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Element } from 'react-scroll'
import BlogOutline from '../../components/BlogOutline'
import Page from '../../components/Page'

export default function Blog() {
  const blog = [
    {
      title: 'Getting Into Web Development',
      value: 'heading1',
      content: [
        'I first got into web development when I decided on a whim to try joining the web dev committee for BioHack, one of various hackathons at UCR.',
        'At this point, my only experience with web dev was learning HTML/CSS online to try and make a web app back in high school, which never pushed through. I was working with one HTML file and had no clue about any frameworks or other tools.',
        'So, I wanted to try something new, and I loved it.',
      ]
    },
    {
      title: 'Why Make a Website?',
      value: 'heading2',
      content: [
        'What better way to learn something new than just diving right in? So, I decided to try building my own website using Gatsby.',
        'My experience from BioHack made me want to learn more about web development. And making my own website from scratch definitely led me to learning more about other frameworks and toolchains, along with challenging my design skills.',
        'With that, I made my own personal space on the internet. Hope you like my website!',
      ],
    },
  ]

  return (
    <>
      <Page title='Making My First Portfolio'>
        <div>
          <h1>
            Making My First Portfolio
          </h1>
          <p className='mt-3 text-sm'>
            July 27 2021 • 1 min read
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
            <Link passHref href='/blog'>
              <div className='invisible flex gap-3 items-center self-center px-3 py-2 rounded-lg bg-nav-accent hover:bg-nav-button text-base text-text-primary cursor-pointer'>
                <BiChevronLeft className='text-xl'/> Previous
              </div>
            </Link>
            <Link passHref href='/blog/remaking-my-portfolio'>
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
