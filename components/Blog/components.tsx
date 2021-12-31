import React, { useState } from 'react'
import Link from 'next/link'
import { Link as NavLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { BiListUl, BiX } from 'react-icons/bi'

interface BlurbProps {
  link: string
  title: string
  date: string
  caption: string
}

interface Bookmark {
  value: string
  title: string
}

interface OutlineProps {
  bookmarks: Bookmark[]
}

export function BlogBlurb({ link, title, date, caption }: BlurbProps) {
  return (
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
      </motion.div>
    </Link>
  )
}

export function BlogOutline({ bookmarks }: OutlineProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* desktop blog outline */}
      <div className='z-[90] fixed top-1/2 right-2 hidden 2xl:flex flex-col justify-center max-w-[15rem] p-2.5 rounded-lg rounded-bl-2xl bg-primary shadow-shadow font-medium transform -translate-y-1/2'>
        <h2 className='flex gap-2 items-center mt-0 mb-2 pt-2 pl-2 text-xl text-accent'>
          <BiListUl className='text-2xl' /> Outline
        </h2>
        <div className='flex gap-1.5 flex-col px-2 pb-2'>
          { bookmarks.map(({ value, title }) =>
            <NavLink 
              activeClass='text-accent'
              to={value}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className={
                'text-base hover:text-accent cursor-pointer transition-color duration-150 '
                + (value.includes('subheading') ? 'ml-6 text-sm' : 'text-base')
              }
            >
              {title}
            </NavLink>
          )}
        </div>
      </div>
      {/* mobile blog outline */}
      <div 
        className={
          'z-[90] fixed bottom-2 right-2 hidden sm:flex 2xl:hidden flex-col justify-end items-start max-w-[15rem] p-2.5 rounded-lg rounded-tl-2xl bg-primary shadow-shadow font-medium overflow-hidden '
          + (!open && 'w-[3.75rem] h-[3.75rem]')
        }
      >
        <h2 className='flex gap-2 items-center mt-0 mb-2 pt-2 pl-2 text-xl text-accent'>
          <BiListUl className='text-2xl' /> Outline
        </h2>
        <div className='flex gap-1.5 flex-col px-2 pb-2'>
          { bookmarks.map(({ value, title }) =>
            <NavLink 
              activeClass='text-accent'
              to={value}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className={
                'text-base hover:text-accent cursor-pointer transition-color duration-150 '
                + (value.includes('subheading') ? 'ml-6 text-sm' : 'text-base')
              }
            >
              {title}
            </NavLink>
          )}
        </div>
        <div
          className='flex self-end max-w-min p-2 rounded-lg rounded-tl-2xl hover:bg-nav-button text-2xl cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          { open
            ? <BiX />
            : <BiListUl />
          }
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full bg-transparent transition-all duration-150 '
          + ( open ? 'z-[80] visible' : 'z-0 invisible' )
        }
        onClick={() => setOpen(false)}
      />
    </>
  )
}