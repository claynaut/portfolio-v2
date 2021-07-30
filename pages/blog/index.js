import Head from 'next/head'
import Footer from '../../components/Footer'
import BlogBlurb from '../../components/BlogBlurb'

import styles from '../../styles/Index.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | Blog</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.title}>Blog</div>
          <p>Occasionally writing about what I&apos;ve done and what I find interesting.</p>
          {/* <BlogBlurb
            link="/blog"
            title="Trying Out for Web Dev Lead"
            date="August 2021"
            caption="Getting outside of my comfort zone with my desire to learn more."
          />
          <BlogBlurb
            link="/blog"
            title="Joining BioHack"
            date="July 2021"
            caption="Going over my experience with joining the BioHack web dev committee."
          /> */}
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
      </main>
      <Footer />
    </div>
  )
}
