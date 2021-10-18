import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMinusSm, HiPlus, HiChevronUp } from 'react-icons/hi'

export default function TimeAccordion( props ) {
  const [open, setOpen] = useState(true)

  return (
    <div>
      <div
        className='group flex gap-2 items-center max-w-min my-4 font-bold text-2xl text-text-secondary cursor-pointer'
        onClick={() => setOpen(!open)}
      >
        { open 
          ? <HiMinusSm className='group-hover:text-accent' /> 
          : <HiPlus className='group-hover:text-accent' />
        }
        {props.year}
      </div>
      <div 
        className={
          'flex flex-col items-start overflow-hidden transition-size ease-in-out '
          + (props.length === 'sm' ? 'duration-200 ' : 'duration-500 ')
          + (open ? 'h-auto ' : 'h-full max-h-0 ')
          + (open && (props.length === 'sm' ? 'max-h-96': 'max-h-[150rem]'))
        }
      >
        {props.children}
        {(props.length === 'xl') && 
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.995}} 
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            onClick={() => setOpen(!open)}
            className='flex gap-3 items-center self-center mt-3 px-3 py-2 rounded-lg bg-nav-accent hover:bg-nav-button text-base text-text-primary'
          >
            Show Less <HiChevronUp />
          </motion.button>
        }
      </div>
    </div>
  )
}