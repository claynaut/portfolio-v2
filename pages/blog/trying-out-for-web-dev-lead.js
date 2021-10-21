import Link from 'next/link'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import BlogOutline from '@/components/BlogOutline'
import Page from '@/components/Page'

export default function Blog() {
  const blog = [
    {
      title: 'Moving on From BioHack',
      value: 'blog4heading1',
      content: [
        'BioHack truly kickstarted my interest in web development, fueling my desire to learn more and try out new experiences. Before this, I never imagined myself to become a web developer, and I never realized how fun it is until then.',
        'So, eager to learn more about web development and build even more experience, I tried applying for any web development positions for organizations at UCR, mainly Web Dev Lead for all the hackathons at UCR.',
      ]
    },
    {
      title: 'Months of Applying to Web Dev Positions',
      value: 'blog4heading2',
      content: [],
    },
    {
      title: 'Webmaster for WINC',
      value: 'blog4subheading1',
      content: [
        'The first position I applied for was Webmaster for Women in Computing (WINC), an organization dedicated to supporting a network of leading women in tech at UCR. The website was already built, so Webmaster would be mainly be in charge of maintenance. Despite this, I was eager to gain experience in any type of way.',
        'Anyways, this had been the first time I&\'ve been interviewed for a while (several years), so naturally, I was quite nervous. But I did practice some basic interview questions to feel a bit better before the interview.',
        'I thought the interview went alright. In the end, I didn\'t get the position.',
      ]
    },
    {
      title: 'Web Dev Lead for Rose Hack',
      value: 'blog4subheading2',
      content: [
        'The second position I tried out for was Web Dev Lead for Rose Hack, a women-centric hackathon at UCR. Again, I reviewed interview questions to prepare myself.',
        'In my opinion, the interview didn\'t feel like it went too well. Lo and behold, I didn\'t get the poisiton.',
      ]
    },
    {
      title: 'Web Dev Lead for Lotus Hacks',
      value: 'blog4subheading3',
      content: [
        'At this point, my luck for getting a Web Dev Lead position didn\'t seem too great. Either way, I kept applying since I still wanted to learn more about web development and especially gain more experience as a Web Dev Lead. So, the third time I applied was for Web Dev Lead for Lotus Hacks, the first hardware-centric hackathon at UCR.',
        'This time around, I had more confidence in answering interview questions. And I think from this point on, I started winging my interviews instead of practicing interview questions beforehand (probably not a good idea, but it still went well).',
        'And guess what? I got the position!',
        'I remember truly feeling excited once I heard the news. But I didn\'t stop there—I applied to two more hackathons.',
      ]
    },
    {
      title: 'Web Dev Lead for Citrus Hack',
      value: 'blog4subheading4',
      content: [
        'At this point, I felt pretty comfortable with doing interviews. And this fourth time I applied was for Web Dev Lead for Citrus Hack, Southern California\'s premier hackathon at UCR, which would be in charge of two hackathons—Citrus Hack and Cutie Hack. Citrus Hack is one of the larger hackathons at UCR, while Cutie Hack is a beginner-oriented hackathon targeting college freshmen and high school students.',
        'Fortunately, I knew the director as I worked with him beforehand in BioHack since he was the Web Dev Lead at the time. And thanks to him, I was inspired to get more into web development.',
        'I felt like the interview went pretty well and in the end, I got the position! And that started my transition into a full stack developer (a blog post for another time).',
      ]
    },
    {
      title: 'Web Dev Lead for BioHack',
      value: 'blog4subheading5',
      content: [
        'And for the last time, we\'ve come full circle, as I applied for Web Dev Lead for BioHack where it all started.',
        'And spoilers—I got the position.',
        'At the start of the year, when I first joined the web dev committee for BioHack, I never would have imagined or seen myself becoming Web Dev Lead for any hackathon, especially the hackathon I first joined to help develop the website. Now? I couldn\'t be happier or more excited to be the Web Dev Lead for three hackathon organizations at UCR.',
      ]
    },
    {
      title: 'What Came First? The Job or the Experience?',
      value: 'blog4heading3',
      content: [
        'Most entry-level jobs seem to require years of experience. But, how can you get years of experience if you can\'t get a job in the first place?',
        'On a related note, I asked myself "how would I gain more experience in web dev?" I surely didn\'t want to stop at being just a web dev committee member for BioHack. So, I tried out for all these Web Dev Lead positions in an attempt to have the opportunity to gain any sort of experience. And here I am, a Web Dev Lead for hackathons I never imagined I would be a lead for.',
        'To sum it all up, I suggest trying out things, even if you\'re not entirely confident in them. After all, we have to start somewhere.',
      ]
    },
  ]

  return (
    <>
      <Page title='Trying Out for Web Dev Lead'>
        <div>
          <h1>
            Trying Out for Web Dev Lead
          </h1>
          <p className='mt-3 text-sm'>
            Aug 27 2021 • 5 min read
          </p>
          <div className='flex flex-col text-base'>
            { blog.map(({ title, value, content }) =>
              <>
                <div id={value}>
                  { value.includes('subheading')
                    ? <h3 className='my-2'>{title}</h3>
                    : <h2 className='my-2 mt-4'>{title}</h2>
                  }
                </div>
                <div className='flex gap-4 flex-col'>
                  { content.map((paragraph) => <p>{paragraph}</p>) }
                </div>
              </>
            )}
          </div>
          <div className='flex w-full justify-between mt-4'>
            <Link passHref href='/blog/joining-biohack'>
              <div className='flex gap-3 items-center self-center px-3 py-2 rounded-lg bg-nav-accent hover:bg-nav-button text-base text-text-primary cursor-pointer'>
                <BiChevronLeft className='text-xl'/> Previous
              </div>
            </Link>
            <Link passHref href='/blog'>
              <div className='invisible flex gap-3 items-center self-center px-3 py-2 rounded-lg bg-nav-accent hover:bg-nav-button text-base text-text-primary cursor-pointer'>
                Next <BiChevronRight className='text-xl'/>
              </div>
            </Link>
          </div>
        </div>
      </Page>
      <BlogOutline bookmarks={blog} />
    </>
  )
}
