import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'

import profile from '../public/assets/profile.png'

import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | Home</title>
        <meta name="description" content="Portfolio for J.S. Pescasio, an aspiring software engineer based in Southern California." />
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
          <div className={styles.title}>Hello! I&apos;m J.S.</div>
          <p>
            Aspiring software engineer based in Southern California, with a great interest in software and web development.
          </p>
          <p>
            Currently a third-year undergraduate studying Computer Science at UCR. 
            Let&apos;s talk at <Link passHref href='https://twitter.com/claynaut'><span className={styles.link}>hello@jspescas.io</span></Link>!
          </p>
        </div>
        <div className={styles.imagewrapper}>
          <Image 
            src={profile}
            alt="Profile Picture"
            layout="fixed"
            objectFit="contain"
            width={280}
            height={280}
            quality={100}
            placeholder="blur"
            className={styles.image}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
