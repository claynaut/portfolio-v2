import Head from 'next/head'
import Container from '../../components/Container'

export default function Blog() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | Making My First Portfolio</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div>
          <h1>
            Making My First Portfolio
          </h1>
          <p className='text-sm'>
            July 27 2021 • 1 min read
          </p>
          <div className='mb-8 text-base'>
            <h2>
              Getting Into Web Development
            </h2>
            <p className='my-4'>
              I first got into web development when I decided on a whim to try joining the web dev committee for BioHack, one of various hackathons at UCR.
            </p>
            <p className='my-4'>
              At this point, my only experience with web dev was learning HTML/CSS online to try and make a web app back in high school, which never pushed through. I was working with one HTML file and had no clue about any frameworks or other tools.
            </p>
            <p className='my-4'>
              So, I wanted to try something new, and I loved it.
            </p>
          </div>
          <div className='text-base'>
            <h2>
              Why Make a Website?
            </h2>
            <p>
              What better way to learn something new than just diving right in? So, I decided to try building my own website using Gatsby.
            </p>
            <p className='my-4'>
              My experience from BioHack made me want to learn more about web development. And making my own website from scratch definitely led me to learning more about other frameworks and toolchains, along with challenging my design skills. 
            </p>
            <p className='my-4'>
              With that, I made my own personal space on the internet. Hope you like my website!
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}
