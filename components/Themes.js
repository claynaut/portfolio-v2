import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  BiPalette,
  BiX,
  BiSun,
  BiMoon,
  BiHive,
  BiCycling,
  BiAnchor,
  BiWorld
} from 'react-icons/bi'

export default function Themes() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const selectedTheme = useRef('light')
  const themes = [
    {
      icon: <BiSun />,
      name: 'Morning',
      value: 'light',
    },
    {
      icon: <BiMoon />,
      name: 'Night',
      value: 'dark',
    },
    {
      icon: <BiHive />,
      name: 'Honey',
      value: 'honey',
    },
    {
      icon: <BiCycling />,
      name: 'Summer',
      value: 'summer',
    },
    {
      icon: <BiAnchor />,
      name: 'Nautical',
      value: 'nautical',
    },
    {
      icon: <BiWorld />,
      name: 'Earthy',
      value: 'earthy',
    },
  ]

  const selectTheme = (selected) => {
    setTheme(selected)
    localStorage.setItem('theme', selected)
    selectedTheme.current = selected
  }

  useEffect(() =>{
    selectedTheme.current = localStorage.getItem('theme')
  }, [theme, selectedTheme])

  return (
    <>
      {/* desktop theme bar */}
      <motion.div
        whileHover={{ width: 165, height: 380 }}
        className='z-[100] fixed top-2 right-2 hidden xl:flex flex-col items-end w-[3.75rem] h-[3.75rem] p-2.5 rounded-lg rounded-bl-2xl bg-primary shadow-shadow overflow-hidden'
      >
        <div className='flex self-center max-w-min mb-1.5 p-2 text-2xl'>
          <BiPalette />
        </div>
        { themes.map(({ icon, name, value }) =>
          <div
            className={
              'flex gap-2 items-center mt-2 p-2 w-36 rounded-lg rounded-bl-2xl hover:bg-accent hover:text-accent-darkest font-semibold cursor-pointer '
              + (selectedTheme.current === value && 'bg-accent text-accent-darkest' )
            }
            onClick={() => selectTheme(value)}
          >
            <div className='text-2xl'>
              {icon}
            </div>
            <div>
              {name}
            </div>
          </div>
        )}
      </motion.div>
      {/* mobile theme bar */}
      <div
        className={
          'z-[100] fixed top-2 right-2 flex xl:hidden flex-col items-end p-2.5 rounded-lg rounded-bl-2xl bg-primary shadow-shadow overflow-hidden transition-size duration-150 '
          + (open ? 'w-[10.25rem] h-[23.5rem]' : 'w-[3.75rem] h-[3.75rem]')
        }
      >
        <div
          className='flex max-w-min mb-1 p-2 rounded-lg rounded-bl-2xl hover:bg-nav-button text-2xl cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          { open
            ? <BiX />
            : <BiPalette />
          }
        </div>
        { themes.map(({ icon, name, value }) =>
          <div
            className={
              'flex gap-2 items-center mt-2 p-2 w-36 rounded-lg hover:bg-accent hover:text-accent-darkest font-semibold cursor-pointer '
              + (selectedTheme.current === value && 'bg-accent text-accent-darkest' )
            }
            onClick={() => selectTheme(value)}
          >
            <div className='text-2xl'>
              {icon}
            </div>
            <div>
              {name}
            </div>
          </div>
        )}
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full bg-transparent transition-all duration-150 '
          + ( open ? 'z-[90] visible' : 'z-0 invisible' )
        }
        onClick={() => setOpen(false)}
      />
    </>
  )
}