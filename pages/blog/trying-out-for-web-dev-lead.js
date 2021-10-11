import Head from 'next/head'
import Container from '../../components/Container'

export default function Blog() {
  return (
    <Container>
      <Head>
        <title>J.S. Pescasio | Trying Out for Web Dev Lead</title>
      </Head>
      <section className='flex flex-col-reverse md:flex-row w-full'>
        <div>
          <h1 className='mb-4 font-bold text-4xl text-accent dark:text-accent-dark'>
            Trying Out for Web Dev Lead
          </h1>
          <p className='text-sm'>
            Aug 27 2021 • 5 min read
          </p>
          <div className='mb-8 text-base'>
            <h2 className='my-4 font-bold text-2xl text-text-secondary dark:text-text-secondary-dark'>
              Moving on From BioHack
            </h2>
            <p className='my-4'>
              BioHack truly kickstarted my interest in web development, fueling my desire to learn more and try out new experiences. Before this, I never imagined myself to become a web developer, and I never realized how fun it is until then.
            </p>
            <p className='my-4'>
              So, eager to learn more about web development and build even more experience, I tried applying for any web development positions for organizations at UCR, mainly Web Dev Lead for all the hackathons at UCR.
            </p>
          </div>
          <div className='mb-8 text-base'>
            <h2 className='my-4 font-bold text-2xl text-text-secondary dark:text-text-secondary-dark'>
              Months of Applying to Web Dev Positions
            </h2>
            <h3 className='my-4 font-bold text-xl'>
              Webmaster for WINC
            </h3>
            <p className='my-4'>
              The first position I applied for was Webmaster for Women in Computing (WINC), an organization dedicated to supporting a network of leading women in tech at UCR. The website was already built, so Webmaster would be mainly be in charge of maintenance. Despite this, I was eager to gain experience in any type of way.
            </p>
            <p className='my-4'>
              Anyways, this had been the first time I&apos;ve been interviewed for a while (several years), so naturally, I was quite nervous. But I did practice some basic interview questions to feel a bit better before the interview.
            </p>
            <p className='my-4'>
              I thought the interview went alright. In the end, I didn&apos;t get the position.
            </p>
            <h3 className='my-4 font-bold text-xl'>
              Web Dev Lead for Rose Hack
            </h3>
            <p className='my-4'>
              The second position I tried out for was Web Dev Lead for Rose Hack, a women-centric hackathon at UCR. Again, I reviewed interview questions to prepare myself.
            </p>
            <p className='my-4'>
              In my opinion, the interview didn&apos;t feel like it went too well. Lo and behold, I didn&apos;t get the poisiton.
            </p>
            <h3 className='my-4 font-bold text-2xl'>
              Web Dev Lead for Lotus Hacks
            </h3>
            <p className='my-4'>
              At this point, my luck for getting a Web Dev Lead position didn&apos;t seem too great. Either way, I kept applying since I still wanted to learn more about web development and especially gain more experience as a Web Dev Lead. So, the third time I applied was for Web Dev Lead for Lotus Hacks, the first hardware-centric hackathon at UCR.
            </p>
            <p className='my-4'>
              This time around, I had more confidence in answering interview questions. And I think from this point on, I started winging my interviews instead of practicing interview questions beforehand (probably not a good idea, but it still went well).
            </p>
            <p className='my-4'>
              And guess what? I got the position!
            </p>
            <p className='my-4'>
              I remember truly feeling excited once I heard the news. But I didn&apos;t stop there—I applied to two more hackathons.
            </p>
            <h3 className='my-4 font-bold text-2xl'>
              Web Dev Lead for Citrus Hack
            </h3>
            <p className='my-4'>
              At this point, I felt pretty comfortable with doing interviews. And this fourth time I applied was for Web Dev Lead for Citrus Hack, Southern California&apos;s premier hackathon at UCR, which would be in charge of two hackathons—Citrus Hack and Cutie Hack. Citrus Hack is one of the larger hackathons at UCR, while Cutie Hack is a beginner-oriented hackathon targeting college freshmen and high school students.
            </p>
            <p className='my-4'>
              Fortunately, I knew the director as I worked with him beforehand in BioHack since he was the Web Dev Lead at the time. And thanks to him, I was inspired to get more into web development.
            </p>
            <p className='my-4'>
              I felt like the interview went pretty well and in the end, I got the position! And that started my transition into a full stack developer (a blog post for another time).
            </p>
            <h3 className='my-4 font-bold text-2xl'>
              Web Dev Lead for BioHack
            </h3>
            <p className='my-4'>
              And for the last time, we&apos;ve come full circle, as I applied for Web Dev Lead for BioHack where it all started.
            </p>
            <p className='my-4'>
              And spoilers—I got the position.
            </p>
            <p className='my-4'>
              At the start of the year, when I first joined the web dev committee for BioHack, I never would have imagined or seen myself becoming Web Dev Lead for any hackathon, especially the hackathon I first joined to help develop the website. Now? I couldn&apos;t be happier or more excited to be the Web Dev Lead for three hackathon organizations at UCR.
            </p>
          </div>
          <div className='text-base'>
            <h2 className='my-4 font-bold text-2xl text-text-secondary dark:text-text-secondary-dark'>
              What Came First? The Job or the Experience?
            </h2>
            <p className='my-4'>
              Most entry-level jobs seem to require years of experience. But, how can you get years of experience if you can&apos;t get a job in the first place?
            </p>
            <p className='my-4'>
              On a related note, I asked myself &quot;how would I gain more experience in web dev?&quot; I surely didn&apos;t want to stop at being just a web dev committee member for BioHack. So, I tried out for all these Web Dev Lead positions in an attempt to have the opportunity to gain any sort of experience. And here I am, a Web Dev Lead for hackathons I never imagined I would be a lead for.
            </p>
            <p className='my-4'>
              To sum it all up, I suggest trying out things, even if you&quot;re not entirely confident in them. After all, we have to start somewhere.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}
