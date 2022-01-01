import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useSWR from 'swr'
import { HiMinusSm, HiPlus, HiChevronUp } from 'react-icons/hi'
import {
  BiStar,
  BiAward,
  BiCog,
  BiBoltCircle,
  BiDesktop,
  BiCodeAlt, 
  BiWorld, 
  BiCake,
  BiJoystick,
  BiPalette
} from 'react-icons/bi'

const fetcher = (url: string) => fetch(url).then(res => res.json())
interface AccordionProps {
  children: React.ReactNode | React.ReactNode[]
  year: number
  length: number
}

interface BlurbProps {
  icon: React.ReactNode
  title: string
  caption: string
}

function TimeAccordion({ children, year, length }: AccordionProps) {
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
          + (length >= 10 ? 'duration-500 ' : 'duration-200 ')
          + (open ? 'h-auto ' : 'h-full max-h-0 ')
          + (open && (length >= 10 ? 'max-h-[200rem]' : 'max-h-96'))
        }
      >
        {children}
        {(length >= 10) && 
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

const TimeBlurb = ({ icon, title, caption }: BlurbProps) => (
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

export function Timeline() {
  const { data, error } = useSWR('/api/about/timeline', fetcher)

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

  // Order by most recent events
  const timelines = data.data.sort((a,b) => b.year - a.year)

  const icons = {
    build: <BiCog/>,
    spark: <BiBoltCircle/>,
    achievement: <BiStar/>,
    academic: <BiAward/>,
    travel: <BiWorld/>,
    celebration: <BiCake/>,
    online: <BiDesktop/>,
    code: <BiCodeAlt/>,
    fun: <BiJoystick/>,
    art: <BiPalette/>,
  }

  return (
    <>
      { timelines.map(({year, events}) =>
          <TimeAccordion
            year={year}
            length={events.length}
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-full pl-7'>
              { [...events].reverse().map(({icon, title, caption}) =>
                <TimeBlurb
                  icon={icons[icon]}
                  title={title}
                  caption={caption}
                />
              )}
            </div>
          </TimeAccordion>
        )}
    </>
  )
}