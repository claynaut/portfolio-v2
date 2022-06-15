import type { NextPage } from 'next'
import { Page } from 'components/Page'
import { experiences } from 'data/experiences'

interface EventProps {
  icon: React.ReactNode
  name: string
  subtitle?: string[]
  timespan?: string
  description: string
}

const About: NextPage = () => {
  return (
    <Page title='About'>
      <div className='flex flex-col gap-2'>
        <h2>About</h2>
        <p className='text-secondary-light'>
          Just someone who just enjoys coding to a great extent. Though,
          I&apos;ve also got other interests to keep me busy. See what I&apos;ve
          been up to.
        </p>
      </div>
      {experiences.map(({ title, events }) => (
        <div key={title}>
          <h3>{title}</h3>
          <ul>
            {events.map(
              ({ icon, name, subtitle, timespan, description }: EventProps) => (
                <li
                  key={name}
                  className='relative ml-2 pl-4 pb-4 border-l-2 border-secondary-mute'
                >
                  <div className='absolute top-0 -left-[0.9375rem] p-1 text-xl bg-primary'>
                    {icon}
                  </div>
                  <div className='flex items-center gap-1.5 font-semibold'>
                    <span>{name}</span>
                    {subtitle && (
                      <div className='flex gap-1.5 h-min'>
                        {subtitle.map((sub) => (
                          <span
                            key={name + '-' + sub}
                            className='px-1.5 rounded-md bg-accent-mute text-accent-text text-sm font-semibold'
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {timespan && (
                    <span className='text-sm text-secondary-light font-medium'>
                      {timespan}
                    </span>
                  )}
                  <p className='text-base'>{description}</p>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </Page>
  )
}

export default About
