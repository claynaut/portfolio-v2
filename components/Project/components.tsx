import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlurbProps {
  title: string
  date: string
  caption: string
  link: string
  stack: string[]
  external: boolean
}

export function ProjectBlurb({ link, title, date, caption, stack, external }: BlurbProps) {
  return (
    <>
    {
      external
      ?
        <a
          target='_blank'
          rel='noreferrer noopener'
          href={link}
          className='flex'
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.995}} 
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            className='group flex flex-col w-full p-5 border-2 border-border rounded-xl bg-primary hover:bg-border cursor-pointer'
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
        </a>
      :
        <Link passHref href={link}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.995}} 
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            className='group flex flex-col w-full p-5 border-2 border-border rounded-xl bg-primary hover:bg-border cursor-pointer'
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
        </Link>
    }
    </>
  )
}
