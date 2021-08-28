import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import TimeBlurb from '../components/TimeBlurb'
import TimeAccordion from '../components/TimeAccordion'

import { 
  BiMinus,
  BiPlus,
  BiStar,
  BiAward,
  BiCog,
  BiBoltCircle,
  BiDesktop,
  BiCodeAlt, 
  BiWorld, 
  BiCake,
  BiJoystick,
  BiPalette
} from 'react-icons/bi'

import styles from '../styles/Index.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | About</title>
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

          <p>I&apos;m also known as claynaut, my pen name for anything art-related. See most of my artworks on <Link passHref href='https://twitter.com/claynaut'><span className={styles.link}>Twitter</span></Link>.</p>
          <p>See what I&apos;ve done and where I&apos;ve gone, with this timeline of my experiences.</p>
          
          <TimeAccordion year='2021' length='lg'>
            <TimeBlurb 
              icon={<BiCog />}
              title="Built my Second Keyboard"
              caption="A compact GMMK with Glorious Holy Panda switches and a combination of GPBT keycaps and MiTo GMK Laser keycaps. Digging the look and the feel."
            />
            <TimeBlurb 
              icon={<BiCog />}
              title="Built my First Keyboard"
              caption="A compact GMMK with Invyr Holy Panda switches and GMK Red Samurai keycaps. Never heard a more satisfying click."
            />
            <TimeBlurb 
              icon={<BiBoltCircle />}
              title="Joined Prytaneum"
              caption="A project led by the School of Public Policy at University of California, Riverside, developing a unique platform for a better democracy. Excited to get more experience in something I enjoy doing."
            />
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
              caption="Spearheaded the development for the Cutie Hack, Citrus Hack, Lotus Hacks, BioHack websites, getting outside of my comfort zone."
            />
            <TimeBlurb 
              icon={<BiBoltCircle />}
              title="Started Learning Python"
              caption="Hopefully going to make an app using this."
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
          </TimeAccordion>
          
          <TimeAccordion year='2020' length='xs'>
            <TimeBlurb 
              icon={<BiBoltCircle />}
              title="Started Learning ASL"
              caption="For once, not a programming language."
            />
            <TimeBlurb 
              icon={<BiDesktop />}
              title="Online Classes"
              caption="Learning online, what a challenge."
            />
          </TimeAccordion>
          
          <TimeAccordion year='2019' length='sm'>
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
          </TimeAccordion>

          <TimeAccordion year='2018' length='xs'>
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
          </TimeAccordion>

          <TimeAccordion year='2015' length='xs'>
            <TimeBlurb 
              icon={<BiCodeAlt />}
              title="Learned How to Code in Java"
              caption="Greeted the world with System.out.println(&quot;Hello World!&quot;)."
            />
          </TimeAccordion>

          <TimeAccordion year='2014' length='xs'>
            <TimeBlurb 
              icon={<BiPalette />}
              title="Got my First Drawing Tablet"
              caption="A Wacom Intuos Pro Medium. Still using it to this day."
            />
          </TimeAccordion>

          <TimeAccordion year='2008' length='xs'>
            <TimeBlurb 
              icon={<BiJoystick />}
              title="Got my First Nintendo DS"
              caption="Started playing Pokemon, the start of my video gaming hobby."
            />
          </TimeAccordion>

          <TimeAccordion year='2006' length='xs'>
            <TimeBlurb 
              icon={<BiWorld />}
              title="Immigrated to USA"
              caption="Moved to Southern California and stayed there since."
            />
          </TimeAccordion>

          <TimeAccordion year='2001' length='xs'>
            <TimeBlurb 
              icon={<BiCake />}
              title="Born"
              caption="In Manila, Philippines."
            />
          </TimeAccordion>
        </div>
      </main>
      <Footer />
    </div>
  )
}
