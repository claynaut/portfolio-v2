import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectBlurb(props) {
  const [isMobile, setIsMobile] = useState(false)
  var desktopVariants = {}
  if (!isMobile)
    desktopVariants = {
      hover: { scale: 1.02 },
      tap: { scale: 0.995},
    }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <Link passHref href={props.link}>
      <motion.div 
        variants={desktopVariants}
        whileHover='hover'
        whileTap='tap' 
        transition={{ ease: 'easeInOut', duration: 0.1 }}
        className='group flex flex-col w-full mb-2 p-5 border-2 border-border dark:border-border-dark rounded-xl hover:bg-border dark:hover:bg-border-dark cursor-pointer'
      >
        <div className='flex flex-col sm:flex-row sm:justify-between mb-3 font-semibold'>
          <h3 className='mb-1 text-text-secondary dark:text-text-secondary-dark group-hover:text-accent dark:group-hover:text-accent-dark'>
            {props.title}
          </h3>
          <div className='text-sm'>
            {props.date}
          </div>
        </div>
        <p>
          {props.caption}
        </p>
        <div className='flex flex-wrap mt-5 gap-2 font-semibold text-sm'>
          {props.children}
        </div>
      </motion.div>
    </Link>
  )
}
