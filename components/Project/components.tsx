import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())
interface BlurbProps {
  title: string
  date: string
  caption: string
  stack: string[]
  link?: string
  external?: boolean
}

interface LinkProps {
  children: React.ReactNode | React.ReactNode[]
  link: string
}
interface BodyProps {
  title: string
  date: string
  caption: string
  stack: string[]
}

const ExternalLinkWrapper = ({ children, link }: LinkProps) => (
  <a target='_blank' rel='noreferrer noopener' href={link} className='flex cursor-pointer'>
    {children}
  </a>
)

const InternalLinkWrapper = ({ children, link }: LinkProps) => (
  <Link passHref href={link}>
    <span className='cursor-pointer'>
      {children}
    </span>
  </Link>
)

const ProjectBody = ({ title, date, caption, stack }: BodyProps) => (
  <motion.div 
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.995}} 
    transition={{ ease: 'easeInOut', duration: 0.1 }}
    className='group flex flex-col w-full p-5 border-2 border-border rounded-xl bg-primary hover:bg-border'
  >
    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 font-semibold'>
      <h3 className='text-text-secondary group-hover:text-accent'>
        {title}
      </h3>
      <div className='text-sm'>
        {date}
      </div>
    </div>
    <p className='text-base'>
      {caption}
    </p>
    <div className='flex flex-wrap mt-5 gap-1.5 font-semibold text-sm'>
      { stack.map((tech) => 
        <div className='px-2.5 py-1 rounded-md bg-accent text-accent-darkest'>
          {tech}
        </div>
      )}
    </div>
  </motion.div>
)

const ProjectBlurb = ({ link, title, date, caption, stack, external }: BlurbProps) => (
  <>
    {
      link ?
        (external
          ?
            <ExternalLinkWrapper link={link}>
              <ProjectBody
                title={title}
                date={date}
                caption={caption}
                stack={stack}
              />
            </ExternalLinkWrapper>
          :
            <InternalLinkWrapper link={link}>
              <ProjectBody
                title={title}
                date={date}
                caption={caption}
                stack={stack}
              />
            </InternalLinkWrapper>
          )
      :
        <span className='flex cursor-default'>
          <ProjectBody
            title={title}
            date={date}
            caption={caption}
            stack={stack}
          />
        </span>
    }
  </>
)

export function CurrentProjectList() {
  const { data, error } = useSWR('/api/projects/current', fetcher)

  if (error) 
    return (
      <p className='my-4'>
        Uh oh. Something went wrong. Contact me if this error persists.
      </p>
    )
  if (!data) 
    return (
      <p className='my-4'>
        Loading...
      </p>
    )

  const projects = data.data.sort((a, b) => a.order - b.order)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
      { projects.map(({ link, title, date, caption, stack, external }) =>
        <ProjectBlurb
          link={link}
          title={title}
          date={date}
          caption={caption}
          stack={stack}
          external={external}
        />
      )}
    </div>
  )
}

export function UpcomingProjectList() {
  const { data, error } = useSWR('/api/projects/upcoming', fetcher)

  if (error) 
    return (
      <p className='my-4'>
        Uh oh. Something went wrong. Contact me if this error persists.
      </p>
    )
  if (!data) 
    return (
      <p className='my-4'>
        Loading...
      </p>
    )

  const projects = data.data.sort((a, b) => a.order - b.order)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
      { projects.map(({ link, title, date, caption, stack, external }) =>
        <ProjectBlurb
          link={link}
          title={title}
          date={date}
          caption={caption}
          stack={stack}
          external={external}
        />
      )}
    </div>
  )
}

export function PreviousProjectList() {
  const { data, error } = useSWR('/api/projects/previous', fetcher)

  if (error) 
    return (
      <p className='my-4'>
        Uh oh. Something went wrong. Contact me if this error persists.
      </p>
    )
  if (!data) 
    return (
      <p className='my-4'>
        Loading...
      </p>
    )

  const projects = data.data.sort((a, b) => a.order - b.order)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
      { projects.map(({ link, title, date, caption, stack, external }) =>
        <ProjectBlurb
          link={link}
          title={title}
          date={date}
          caption={caption}
          stack={stack}
          external={external}
        />
      )}
    </div>
  )
}