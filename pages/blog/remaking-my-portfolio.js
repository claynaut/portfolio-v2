import Head from 'next/head'
import Footer from '../../components/Footer'

import styles from '../../styles/Index.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | Remaking my First Portfolio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.title}>Revamping my First Portfolio</div>
          <p className={styles.time}>July 27 2021 • 2 min read</p>
          <div className={styles.section}>
            <div className={styles.subtitle}>Why Did I Revamp It?</div>
            <p>
              I wanted to try something new (again). And as I learned more in web development since the first time I made my initial portfolio, I wanted to make some more improvements and add more features.
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>What&apos;s New?</div>
            <div className={styles.subsubtitle}>Added Themes</div>
            <p>
              I always wanted to try making color themes for a website, like light mode and dark mode. So, I finally figured it out and added it to this new portfolio.
            </p>
            <div className={styles.subsubtitle}>Started a Blog</div>
            <p>
              Thought that writing a blog would be a new and fun experience for me. I&apos;m personally not the best at telling stories, so I hope that as I continue writing this blog that I&apos;ll get better at it.
            </p>
            <p>
              This blog also lets me have something to do on a regular basis (hopefully), other than coding. So, I hope you enjoy reading about my experiences!
            </p>
            <div className={styles.subsubtitle}>A Cleaner UI/UX</div>
            <p>
              Personally enjoyed the creative aspect of my previous portfolio with overlaying divs. Yet, I wanted to try making something cleaner while keeping some parts from my previous portfolio, like the side navbar and blurbs.
            </p>
            <p>
              And I&apos;m definitely proud of how I redid my Projects and About sections.
            </p>
            <div className={styles.subsubtitle}>More About Me</div>
            <p>
              Added more to my About section, so you can learn more about me as a person. Previously, my old portfolio only showcased a few details about what I&apos;ve done and what I plan to do. Now, I&apos;d like to share my experiences with a timeline and this blog.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
