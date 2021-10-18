import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { 
  BiMenu,
  BiHomeAlt,
  BiCategory,
  BiEditAlt,
  BiUserCircle,
  BiFile,
  BiSun,
  BiMoon,
  BiX
} from 'react-icons/bi'

export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const tabs = [
    {
      icon: <BiHomeAlt />,
      name: 'Home',
      link: '/',
    },
    {
      icon: <BiCategory />,
      name: 'Projects',
      link: '/projects',
    },
    {
      icon: <BiEditAlt />,
      name: 'Blog',
      link: '/blog',
    },
    {
      icon: <BiUserCircle />,
      name: 'About',
      link: '/about',
    },
  ]

  return (
    <>
      {/* desktop navbar */}
      <motion.div
        whileHover={{ width: 200 }}
        className='z-[100] fixed top-1/2 left-4 hidden xl:flex flex-col justify-center w-[4.25rem] rounded-lg bg-primary backdrop-filter backdrop-saturate-50 backdrop-blur-lg shadow-shadow font-semibold transform -translate-y-1/2'
      >
        <div className='flex flex-col w-full p-3'>
          <div className='flex justify-center self-center p-2 rounded-lg text-2xl'>
            <BiMenu />
          </div>
          { tabs.map(({ icon, name, link }) =>
            <Link passHref href={link}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.995}} 
                className={
                  'flex gap-2.5 items-center mt-2.5 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent hover:text-accent-darkest cursor-pointer '
                  + (router.pathname === link && 'bg-accent text-accent-darkest')
                }
              >
                <div className='my-2 text-2xl'>{icon}</div>
                <div>{name}</div>
              </motion.div>
            </Link>
          )}
        </div>
        <div className='flex flex-col w-full p-3 pt-0 rounded-bl-lg rounded-br-lg bg-nav-accent backdrop-filter backdrop-saturate-50 backdrop-blur-lg'>
          <a target='_blank' rel='noreferrer noopener' href='/resume.pdf'>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995}} 
              className='flex gap-2.5 items-center w-full mt-3 px-2.5 py-0.5 rounded-lg hover:bg-nav-button overflow-hidden cursor-pointer'
            >
              <div className='my-2 text-2xl'><BiFile /></div>
              <div>Resume</div>
            </motion.div>
          </a>
          {
            theme === 'light' &&
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.995}} 
                className='flex self-center max-w-min mt-2.5 p-2 rounded-lg hover:bg-nav-button text-2xl cursor-pointer'
                onClick={() => setTheme('dark')}
              >
                <BiSun />
              </motion.div>
          }
          {
            theme === 'dark' &&
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.995}} 
                className='flex self-center max-w-min mt-2.5 p-2 rounded-lg hover:bg-nav-button text-2xl cursor-pointer'
                onClick={() => setTheme('light')}
              >
                <BiMoon />
              </motion.div>
          }
        </div>
      </motion.div>
      {/* mobile navbar */}
      <div className='z-[100] fixed top-4 left-0 xl:hidden flex-col justify-start w-full px-4 font-semibold'>
        <div className={
          'rounded-lg bg-primary backdrop-filter backdrop-saturate-50 backdrop-blur-lg shadow-shadow overflow-hidden transition-height duration-200 ease-out '
          + (open ? 'h-[21rem]' : 'h-[3.75rem]')
        }>
          <div className='flex flex-col w-full p-2.5'>
            <div className='flex justify-between items-center w-full mb-0.5'>
              <div
                className='flex items-center p-2 rounded-lg hover:bg-nav-button text-2xl cursor-pointer'
                onClick={() => setOpen(!open)}
              >
                { !open && <BiMenu /> }
                { open && <BiX /> }
              </div>
              <div className='flex items-center p-2 rounded-lg bg-accent text-accent-darkest text-xl'>
                {router.pathname === '/' && <BiHomeAlt /> }
                {router.pathname === '/projects' && <BiCategory /> }
                {router.pathname.includes('/blog') && <BiEditAlt /> }
                {router.pathname === '/about' && <BiUserCircle /> }
              </div>
              {
                theme === 'light' &&
                  <div onClick={() => setTheme('dark')}>
                    <div className='flex items-center p-2 rounded-lg hover:bg-nav-button text-2xl cursor-pointer'>
                      <BiSun />
                    </div>
                  </div>
              }
              {
                theme === 'dark' &&
                  <div onClick={() => setTheme('light')}>
                    <div className='flex items-center p-2 rounded-lg hover:bg-nav-button text-2xl cursor-pointer'>
                      <BiMoon />
                    </div>
                  </div>
              }
            </div>
            { tabs.map(({ icon, name, link }) =>
              <Link passHref href={link}>
                <div
                  className={
                    'flex gap-2.5 items-center mt-2 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent hover:text-accent-darkest cursor-pointer '
                    + (router.pathname === link && 'bg-accent text-accent-darkest')
                  }
                  onClick={() => setOpen(false)}
                >
                  <div className='my-2 text-2xl'>{icon}</div>
                  <div>{name}</div>
                </div>
              </Link>
            )}
          </div>
          <div className='flex flex-col w-full p-3 pt-0 rounded-bl-lg rounded-br-lg bg-nav-accent backdrop-filter backdrop-saturate-50 backdrop-blur-lg'>
            <Link passHref href='https://drive.google.com/file/d/1AzDRGmMy14PK4Mce554IjysAhcEXsp_t/view?usp=sharing'>
              <div className='flex gap-2.5 items-center w-full mt-3 px-2.5 py-0.5 rounded-lg hover:bg-nav-button overflow-hidden cursor-pointer'>
                <div className='my-2 text-2xl'>
                  <BiFile />
                </div>
                <div>Resume</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          "fixed top-0 left-0 w-full h-full bg-transparent transition-all duration-150 "
          + ( open ? "z-[90] visible" : "z-0 invisible" )
        }
        onClick={() => setOpen(false)}
      />
    </>
  )
}
