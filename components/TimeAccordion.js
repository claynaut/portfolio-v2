import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMinusSm, HiPlus, HiChevronUp } from 'react-icons/hi'

export default function TimeAccordion( props ) {
  const [open, setOpen] = useState(true)

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
    <div>
      <div
        className='group flex gap-2 items-center my-4 font-bold text-2xl text-text-secondary dark:text-text-secondary-dark cursor-pointer'
        onClick={() => setOpen(!open)}
      >
        { open 
          ? <HiMinusSm className='group-hover:text-accent dark:group-hover-text-accent-dark' /> 
          : <HiPlus className='group-hover:text-accent dark:group-hover-text-accent-dark' />
        }
        {props.year}
      </div>
      <div 
        className={
          'flex flex-col items-start overflow-hidden transition-height transition-max-height ease-in-out '
          + (props.length === 'sm' ? 'duration-200 ' : 'duration-500 ')
          + (open ? 'h-auto ' : 'h-full max-h-0 ')
          + (open && (props.length === 'sm' ? 'max-h-96': 'max-h-600'))
        }
      >
        {props.children}
        {(props.length === 'xl') && 
          <motion.button 
            variants={desktopVariants}
            whileHover='hover'
            whileTap='tap' 
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            onClick={() => setOpen(!open)}
            className='flex gap-3 items-center self-center px-3 py-2 rounded-lg bg-nav-accent dark:bg-nav-accent-dark text-base text-text-primary dark:text-text-primary-dark'
          >
            Show Less <HiChevronUp />
          </motion.button>
        }
      </div>
    </div>
  )
}