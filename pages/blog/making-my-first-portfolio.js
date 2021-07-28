import Head from 'next/head'
import Footer from '../../components/Footer'

import styles from '../../styles/Index.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | Making my First Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.title}>Making my First Portfolio</div>
          <p className={styles.time}>July 27 2021 • 1 min read</p>
          <div className={styles.section}>
            <div className={styles.subtitle}>Getting Into Web Development</div>
            <p>
              I first got into web development when I decided on a whim to try joining the web dev committee for BioHack, one of various hackathons at UCR.
            </p>
            <p>
              At this point, my only experience with web dev was learning HTML/CSS online to try and make a web app back in high school, which never pushed through. I was working with one HTML file and had no clue about any frameworks or other tools.
            </p>
            <p>
              So, I wanted to try something new, and I loved it.
            </p>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Why Make a Website?</div>
            <p>
              What better way to learn something new than just diving right in? So, I decided to try building my own website using Gatsby.
            </p>
            <p>
              My experience from BioHack made me want to learn more about web development. And making my own website from scratch definitely led me to learning more about other frameworks and toolchains, along with challenging my design skills. 
            </p>
            <p>
              With that, I made my own personal space on the internet. Hope you like my website!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
