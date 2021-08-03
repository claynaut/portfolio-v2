import Head from 'next/head'
import Footer from '../../components/Footer'

import styles from '../../styles/Index.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | Joining BioHack</title>
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
          <div className={styles.title}>Joining BioHack</div>
          <p className={styles.time}>Aug 02 2021 • 3 min read</p>
          <div className={styles.section}>
            <div className={styles.subtitle}>Learning About BioHack</div>
            <p>
              Near the end of winter break in early January of this year, I curiously scrolled through the announcements in my university&apos;s computer science-centric Slack, a messaging platform like Discord. One announcement caught my eye — a promotional flyer to join the committees for BioHack, a healthcare hackathon hosted at UCR. Then, I opened the link to spot if any one of the committees interested me, which happened to be the web dev committee.
            </p>
            <p>
              I thought of trying something new (and learning something new), so I applied to join the web dev committee. And a week or so later, I was accepted and became part of the team.
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>A Huge Learning Experience</div>
            <p>
              At the time, I hardly knew anything about building a website, especially the tech stack that BioHack used. I didn&apos;t know of any frameworks like React and Next.JS, or any development tools like npm and Yarn. 
            </p>
            <p>
              All I knew was basic HTML and CSS. I tried to learn these on my own in an attempt to make a web application for a final project in a computer science class back in high school (which never worked out, so my group and I stuck with using the MIT App Inventor). Other than these two languages, my web development expertise was rather lacking.
            </p>
            <p>
              Though my web development experience was lacking, my curiosity and motivation to learn wasn&apos;t. When I first cloned the repository and navigated through the files, I had no clue how to interpret any part of the files which didn&apos;t involve either HTML or CSS. Despite my cluelessness, I started to poke around the code, making edits here and there, just to figure out how each component works. And as I poked around the code, I started solving issues put up on Github. Eventually, with each experimental edit made and issue resolved, I familiarized myself with the framework and how developing a website worked.
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Moving Forward</div>
            <p>
              Over the span of a few months, from beginning of January to the end of April, I contributed greatly to the frontend development of the BioHack website. I styled most of the sections, set up components like accordions, and developed the scaffolding for the live page. 
            </p>
            <p>
              From my time spent in the BioHack web dev committee, I went from barely knowing HTML and CSS to knowing enough to build my own website (which I did in February, about a month after I joined BioHack). Even though I learned a lot in a short span of time, I still wanted to learn more and expand my experience. So since then, I&apos;ve tried out for web dev lead positions for various hackathons at UCR, revamped my portfolio, and started designing a web application that I plan to develop in the long term.
            </p>
            <p>
              Joining BioHack has inspired my desire to try things out and continue learning, and I hope to never stop learning.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
