import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import TimeBlurb from '../components/TimeBlurb'

import { 
  BiStar,
  BiAward,
  BiCog,
  BiBoltCircle,
  BiDesktop,
  BiCodeAlt, 
  BiWorld, 
  BiCake,
  BiJoystick
} from 'react-icons/bi'

import styles from '../styles/Index.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.title}>About Me</div>
          <p>Other than coding, I spend my free time doing my other interests and hobbies.</p>
          <div className={styles.grid}>
            <div>Art</div>
            <div>Storytelling</div>
            <div>Graphic Design</div>
            <div>KBBQ</div>
            <div>Indie Pop</div>
            <div>Japanese Rock</div>
            <div>Korean R&B</div>
            <div>Nintendo</div>
            <div>Indie Video Games</div>
            <div>Horror Movies</div>
            <div>Crime TV Shows</div>
            <div>Period Piece Dramas</div>
            <div>Musicals</div>
            <div>Swords</div>
            <div>Guitar</div>
            <div>Ukelele</div>
            <div>Traveling</div>
          </div>
          <p>I&apos;m also known as claynaut, my pen name for anything art-related. See most of my artworks on <Link passHref href='mailto:hello@jpescas.io'><span className={styles.link}>Twitter</span></Link>.</p>
          <p>See what I&apos;ve done and where I&apos;ve gone, with this timeline of my experiences.</p>
          <div className={styles.subtitle}>2021</div>
          <TimeBlurb 
            icon={<BiStar />}
            title="Revamped my Portfolio"
            caption="Rebuilt with Next.JS, trying out some new features."
          />
          <TimeBlurb 
            icon={<BiCog />}
            title="Built my First PC"
            caption="Finally, after GPUs started coming back in stock."
          />
          <TimeBlurb 
            icon={<BiStar />}
            title="Web Dev Lead"
            caption="Spearheaded the development for the DiamondHacks, Cutie Hack, Citrus Hack, BioHack websites, getting outside of my comfort zone."
          />
          <TimeBlurb 
            icon={<BiBoltCircle />}
            title="Started Playing Guitar"
            caption="Tried something new just for fun, and still practicing."
          />
          <TimeBlurb 
            icon={<BiCog />}
            title="Built my First Portfolio"
            caption="Diving deeper in web development, and trying out Gatsby."
          />
          <TimeBlurb 
            icon={<BiBoltCircle />}
            title="Joined BioHack"
            caption="Built the frontend for the BioHack website. Wanted to try something new, and I loved it."
          />
          <div className={styles.subtitle}>2020</div>
          <TimeBlurb 
            icon={<BiDesktop />}
            title="Online Classes"
            caption="Learning online, what a challenge."
          />
          <div className={styles.subtitle}>2019</div>
          <TimeBlurb 
            icon={<BiWorld />}
            title="Traveled to Japan"
            caption="Hoping to go again."
          />
          <TimeBlurb 
            icon={<BiAward />}
            title="Admitted to University of California, Riverside"
            caption="Majoring in Computer Science."
          />
          <TimeBlurb 
            icon={<BiAward />}
            title="Graduated High School"
            caption="Farewell, Fullerton. Hello, Riverside."
          />
          <div className={styles.subtitle}>2018</div>
          <TimeBlurb 
            icon={<BiCodeAlt />}
            title="Learned How to Code in C++"
            caption="Greeting the world in another language."
          />
          <TimeBlurb 
            icon={<BiStar />}
            title="Completed my First Internship"
            caption="Spent the summer in Los Angeles as a QA intern, squashing bugs."
          />
          <div className={styles.subtitle}>2015</div>
          <TimeBlurb 
            icon={<BiCodeAlt />}
            title="Learned How to Code in Java"
            caption="Greeted the world with System.out.println(&quot;Hello World!&quot;)."
          />
          <div className={styles.subtitle}>2008</div>
          <TimeBlurb 
            icon={<BiJoystick />}
            title="Got my First Nintendo DS"
            caption="Started playing Pokemon, the start of my video gaming hobby."
          />
          <div className={styles.subtitle}>2006</div>
          <TimeBlurb 
            icon={<BiWorld />}
            title="Immigrated to USA"
            caption="Moved to Southern California and stayed there since."
          />
          <div className={styles.subtitle}>2001</div>
          <TimeBlurb 
            icon={<BiCake />}
            title="Born"
            caption="In Manila, Philippines."
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
