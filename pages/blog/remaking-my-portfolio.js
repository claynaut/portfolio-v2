import Head from 'next/head'
import Container from '../../components/Container'

export default function Blog() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | Remaking My First Portfolio</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div>
          <h1>
            Remaking My First Portfolio
          </h1>
          <p className='text-sm'>
            July 27 2021 • 2 min read
          </p>
          <div className='mb-8 text-base'>
            <h2>
              Why Did I Revamp It?
            </h2>
            <p className='my-4'>
              I wanted to try something new (again). And as I learned more in web development since the first time I made my initial portfolio, I wanted to make some more improvements and add more features.
            </p>
          </div>
          <div className='text-base'>
            <h2>
              What&apos;s New?
            </h2>
            <h2 className='font-bold text-xl'>
              Added Themes
            </h2>
            <p className='my-4'>
              I always wanted to try making color themes for a website, like light mode and dark mode. So, I finally figured it out and added it to this new portfolio.
            </p>
            <h2 className='font-bold text-xl'>
              Started a Blog
            </h2>
            <p className='my-4'>
              Thought that writing a blog would be a new and fun experience for me. I&apos;m personally not the best at telling stories, so I hope that as I continue writing this blog that I&apos;ll get better at it.
            </p>
            <p className='my-4'>
              This blog also lets me have something to do on a regular basis (hopefully), other than coding. So, I hope you enjoy reading about my experiences!
            </p>
            <h2 className='font-bold text-xl'>
              A Cleaner UI/UX
            </h2>
            <p className='my-4'>
              Personally enjoyed the creative aspect of my previous portfolio with overlaying divs. Yet, I wanted to try making something cleaner while keeping some parts from my previous portfolio, like the side navbar and blurbs.
            </p>
            <p className='my-4'>
              And I&apos;m definitely proud of how I redid my Projects and About sections.
            </p>
            <h2 className='font-bold text-xl'>
              More About Me
            </h2>
            <p className='my-4'>
              Added more to my About section, so you can learn more about me as a person. Previously, my old portfolio only showcased a few details about what I&apos;ve done and what I plan to do. Now, I&apos;d like to share my experiences with a timeline and this blog.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}
