import Head from 'next/head'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import BlogBlurb from '../../components/BlogBlurb'

import styles from '../../styles/Index.module.css'

export default function Blog() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | Blog</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div className='w-full'>
          <h1 className='mb-4 font-bold text-4xl text-accent dark:text-accent-dark'>
            Blog
          </h1>
          <p className='my-4'>
            Occasionally writing about what I&apos;ve done and what I find interesting.
          </p>
          <BlogBlurb
            link="/blog/trying-out-for-web-dev-lead"
            title="Trying Out for Web Dev Lead"
            date="August 2021"
            caption="Getting outside of my comfort zone with my desire to learn more."
          />
          <BlogBlurb
            link="/blog/joining-biohack"
            title="Joining BioHack"
            date="August 2021"
            caption="Going over my experience with joining the BioHack web dev committee."
          />
          <BlogBlurb
            link="/blog/remaking-my-portfolio"
            title="Revamping My Portfolio"
            date="July 2021"
            caption="Recreating my portfolio with Next.JS, and why I did it."
          />
          <BlogBlurb
            link="/blog/making-my-first-portfolio"
            title="Making My First Portfolio"
            date="July 2021"
            caption="Why I decided to create my own website."
          />
        </div>
      </section>
      <Footer />
    </Container>
  )
}
