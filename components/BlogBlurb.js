import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogBlurb(props) {
  return (
    <Link passHref href={props.link}>
      <motion.div 
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.995}} 
        transition={{ ease: 'easeInOut', duration: 0.1 }}
        className='group flex flex-col w-full p-5 border-2 border-border rounded-xl bg-primary hover:bg-border cursor-pointer'
      >
        <div className='flex flex-col sm:flex-row sm:justify-between mb-3 font-semibold'>
          <h3 className='mb-1 text-text-secondary group-hover:text-accent'>
            {props.title}
          </h3>
          <div className='text-sm'>
            {props.date}
          </div>
        </div>
        <p className='text-base'>
          {props.caption}
        </p>
      </motion.div>
    </Link>
  )
}
