import Head from 'next/head'
import Footer from '../components/Footer'
import ProjectBlurb from '../components/ProjectBlurb'

import styles from '../styles/Index.module.css'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>J.S. Pescasio | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.title}>Projects</div>
          <div className={styles.subtitle}>In the Works</div>
          <div className={styles.section}>
            <ProjectBlurb
              link="https://jspescas.io"
              title="Portfolio"
              date="July 2021 - Present"
              caption="Revamping my first portfolio, with new styles and more features."
            >
              <div>Next.JS</div>
              <div>CSS Modules</div>
              <div>Framer Motion</div>
            </ProjectBlurb>
            <ProjectBlurb
              link="https://cutiehack2021.vercel.app/"
              title="CutieHack 2021 Website"
              date="June 2021 - Present"
              caption="Developing the frontend and the backend of the website for CutieHack, a beginner-oriented hackathon at UCR."
            >
              <div>Next.JS</div>
              <div>CSS Modules</div>
              <div>Framer Motion</div>
              <div>MongoDB</div>
              <div>TypeScript</div>
            </ProjectBlurb>
            <ProjectBlurb
              link="/projects"
              title="A Web Planner App"
              date="July 2021 - Present"
              caption="Building a web application on a larger scale than I've done before. Geared towards anyone who organizes their day on the go."
            >
              <div>Next.JS</div>
              <div>CSS Modules</div>
              <div>Framer Motion</div>
              <div>SWR</div>
              <div>MongoDB</div>
              <div>TypeScript</div>
            </ProjectBlurb>
            <ProjectBlurb
              link="/projects"
              title="DiamondHacks 2021 Website"
              date="July 2021 - Present"
              caption="Building the frontend and the backend of the website for DiamondHacks, a new hackathon at UCR."
            >
              <div>Next.JS</div>
              <div>CSS Modules</div>
              <div>Framer Motion</div>
              <div>MongoDB</div>
              <div>TypeScript</div>
            </ProjectBlurb>
          </div>
          <div className={styles.subtitle}>Upcoming</div>
          <div className={styles.section}>
            <ProjectBlurb
              link="/projects"
              title="CitrusHack 2022 Website"
              date="2021-2022"
              caption="Designing and developing the website for CitrusHack, a large-scale hackathon at UCR."
            >
              <div>Next.JS</div>
              <div>CSS Modules</div>
              <div>Framer Motion</div>
              <div>MongoDB</div>
              <div>TypeScript</div>
            </ProjectBlurb>
            <ProjectBlurb
              link="/projects"
              title="BioHack 2022 Website"
              date="2021-2022"
              caption="Building the website for BioHack, a healthcare hackathon at UCR."
            >
              <div>Next.JS</div>
              <div>CSS Modules</div>
              <div>Framer Motion</div>
              <div>MongoDB</div>
              <div>TypeScript</div>
            </ProjectBlurb>
          </div>
          <div className={styles.subtitle}>Completed</div>
          <div className={styles.section}>
            <ProjectBlurb
              link="https://dota-2-analyzer-frontend.vercel.app/"
              title="Dota 2 Analyzer"
              date="Jan 2021 - May 2021"
              caption="Built the frontend of a web application using an in-memory database, used to analyze statistics for Dota 2. Developed as a final project with a team of four, for a Software Engineering course."
            >
              <div>React</div>
              <div>CSS Modules</div>
            </ProjectBlurb>
            <ProjectBlurb
              link="https://jspescasio-fe.vercel.app/"
              title="First Portfolio"
              date="Jan 2021 - July 2021"
              caption="Built my first website using Gatsby. Wanted to develop a website from scratch, trying out different frameworks."
            >
              <div>Gatsby.JS</div>
              <div>CSS Modules</div>
              <div>Framer Motion</div>
            </ProjectBlurb>
            <ProjectBlurb
              link="https://biohack2021-jsdev.vercel.app/"
              title="BioHack 2021 Website"
              date="Jan 2021 - May 2021"
              caption="Helped develop the frontend for the BioHack website with the web dev committee."
            >
              <div>Next.JS</div>
              <div>CSS Modules</div>
            </ProjectBlurb>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
