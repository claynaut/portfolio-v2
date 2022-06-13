import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { Page } from 'components/Page'
import { projects } from 'data/projects'

interface WorkProps {
  group: string
  name: string
  link?: string
  timespan: string
  description: string
  tags: string[]
}

const Work = ({
  group,
  name,
  link,
  timespan,
  description,
  tags,
}: WorkProps) => {
  return (
    <motion.div
      whileHover={{ rotate: '-1deg', scale: 1.03 }}
      whileTap={{ scale: 0.998 }}
      className='group flex flex-col gap-2 p-4 rounded-md shadow-md text-base hover:bg-primary-highlight hover:shadow-lg cursor-pointer'
    >
      <div className='flex flex-col'>
        <span className='text-lg font-semibold group-hover:text-accent'>{name}</span>
        <span className='text-secondary-light text-sm font-medium'>
          {timespan}
        </span>
      </div>
      <p className='h-full mb-2'>{description}</p>
      <div className='flex gap-2 flex-wrap'>
        {tags.map((tag) => (
          <span
            key={group + '-' + name + '-' + tag}
            className='px-1.5 rounded-md bg-accent-mute text-accent-text text-sm font-semibold white-space-nowrap'
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Projects: NextPage = () => {
  return (
    <Page title='Projects'>
      <div className='flex flex-col gap-2'>
        <h2>Projects</h2>
        <p className='text-secondary-light'>
          A collection of some projects I&apos;ve worked on.
        </p>
      </div>
      {projects.map(({ group, works }) => (
        <div key={group}>
          <h3>{group}</h3>
          <div className='flex flex-col gap-[1.25rem] grid grid-cols-2'>
            {works.map(({ name, link, timespan, description, tags }) => (
              <Work
                key={group + '-' + name}
                group={group}
                name={name}
                link={link}
                timespan={timespan}
                description={description}
                tags={tags}
              />
            ))}
          </div>
        </div>
      ))}
    </Page>
  )
}

export default Projects
