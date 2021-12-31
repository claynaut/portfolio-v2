import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMinusSm, HiPlus, HiChevronUp } from 'react-icons/hi'

interface AccordionProps {
  children: React.ReactNode | React.ReactNode[]
  year: number
  length: string
}

interface BlurbProps {
  icon: React.ReactNode
  title: string
  caption: string
}

export function TimeAccordion({ children, year, length }: AccordionProps) {
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
        {year}
      </div>
      <div 
        className={
          'flex flex-col items-start overflow-hidden transition-size ease-in-out '
          + (length === 'sm' ? 'duration-200 ' : 'duration-500 ')
          + (open ? 'h-auto ' : 'h-full max-h-0 ')
          + (open && (length === 'sm' ? 'max-h-96': 'max-h-[150rem]'))
        }
      >
        {children}
        {(length === 'xl') && 
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.995}} 
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            onClick={() => setOpen(!open)}
            className='flex gap-3 items-center self-center mt-3 px-3 py-2 rounded-lg bg-nav-accent hover:bg-nav-button text-base text-text-primary'
          >
            Show Less <HiChevronUp className='text-xl'/>
          </motion.button>
        }
      </div>
    </div>
  )
}

export function TimeBlurb({ icon, title, caption }: BlurbProps) {
  return (
    <div className='group flex w-full p-3 border-2 border-border rounded-xl bg-primary hover:bg-border cursor-default'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 font-semibold text-text-secondary group-hover:text-accent'>
          <div className='text-2xl'>
            {icon}
          </div>
          <span>{title}</span>
        </div>
        <div className='leading-relaxed text-base'>
          {caption}
        </div>
      </div>
    </div>
  )
}
