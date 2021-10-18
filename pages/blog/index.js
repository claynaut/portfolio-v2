import Head from 'next/head'
import Container from '../../components/Container'
import BlogBlurb from '../../components/BlogBlurb'

export default function Blog() {
  const posts = [
    {
      link: '/blog/trying-out-for-web-dev-lead',
      title: 'Trying Out for Web Dev Lead',
      date: 'August 2021',
      caption: 'Getting outside of my comfort zone with my desire to learn more.',
    },
    {
      link: '/blog/joining-biohack',
      title: 'Trying Out for Web Dev Lead',
      date: 'August 2021',
      caption: 'Going over my experience with joining the BioHack web dev committee.',
    },
    {
      link: '/blog/remaking-my-portfolio',
      title: 'Trying Out for Web Dev Lead',
      date: 'July 2021',
      caption: 'Recreating my portfolio with Next.JS, and why I did it.',
    },
    {
      link: '/blog/making-my-first-portfolio',
      title: 'Trying Out for Web Dev Lead',
      date: 'July 2021',
      caption: 'Why I decided to create my own website.',
    },
  ]
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | Blog</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div className='w-full'>
          <h1>
            Blog
          </h1>
          <p className='my-4'>
            Occasionally writing about what I&apos;ve done and what I find interesting.
          </p>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
            { posts.map(({ link, title, date, caption }) =>
              <BlogBlurb
                key={title}
                link={link}
                title={title}
                date={date}
                caption={caption}
              />
            )}
          </div>
        </div>
      </section>
    </Container>
  )
}
