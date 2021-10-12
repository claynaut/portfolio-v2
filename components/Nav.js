import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { 
  BiMenu,
  BiHomeAlt,
  BiGridAlt,
  BiEditAlt,
  BiUser,
  BiFile,
  BiSun,
  BiMoon,
  BiX
} from 'react-icons/bi'

export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('')

  var desktopVariants = {
    navHover: { width: 200 },
    itemHover: { scale: 1.05 },
    tap: { scale: 0.995 },
  }

  const openNav = () => {
    setOpen(!open)
  }

  const toggle = () => {
    var currentTheme = document.documentElement.getAttribute('data-theme')
    var targetTheme = 'light'

    if (currentTheme === 'light') { targetTheme = 'dark' }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
    setTheme(targetTheme)
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    document.documentElement.setAttribute('data-theme', theme)
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, setTheme])

  return (
    <>
      {/* desktop navbar */}
      <motion.div
        variants={desktopVariants}
        whileHover='navHover'
        className='z-100 fixed top-6 hidden lg:flex flex-col justify-center w-17 rounded-lg bg-nav dark:bg-nav-dark backdrop-filter backdrop-saturate-50 backdrop-blur-lg shadow-light dark:shadow-dark font-semibold'
      >
        <div className='flex flex-col w-full p-3'>
          <div className='flex justify-center self-center p-2 rounded-lg text-2xl'>
            <BiMenu />
          </div>
          <Link passHref href='/'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={
                'flex gap-2.5 items-center mt-2.5 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent dark:hover:bg-accent-dark hover:text-text-active dark:hover:text-text-active-dark cursor-pointer '
                + (router.pathname === '/' && 'bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark')
              }
            >
              <div className='my-2 text-2xl'><BiHomeAlt /></div>
              <div>Home</div>
            </motion.div>
          </Link>
          <Link passHref href='/projects'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={
                'flex gap-2.5 items-center mt-2.5 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent dark:hover:bg-accent-dark hover:text-text-active dark:hover:text-text-active-dark cursor-pointer '
                + (router.pathname === '/projects' && 'bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark')
              }
            >
              <div className='my-2 text-2xl'><BiGridAlt /></div>
              <div>Projects</div>
            </motion.div>
          </Link>
          <Link passHref href='/blog'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={
                'flex gap-2.5 items-center mt-2.5 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent dark:hover:bg-accent-dark hover:text-text-active dark:hover:text-text-active-dark cursor-pointer '
                + (router.pathname === '/blog' && 'bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark')
              }
            >
              <div className='my-2 text-2xl'><BiEditAlt /></div>
              <div>Blog</div>
            </motion.div>
          </Link>
          <Link passHref href='/about'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={
                'flex gap-2.5 items-center mt-2.5 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent dark:hover:bg-accent-dark hover:text-text-active dark:hover:text-text-active-dark cursor-pointer '
                + (router.pathname === '/about' && 'bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark')
              }
            >
              <div className='my-2 text-2xl'><BiUser /></div>
              <div>About</div>
            </motion.div>
          </Link>
        </div>
        <div className='flex flex-col w-full p-3 pt-0 rounded-bl-lg rounded-br-lg bg-nav-accent dark:bg-nav-accent-dark backdrop-filter backdrop-saturate-50 backdrop-blur-lg'>
          <Link passHref href='https://drive.google.com/file/d/1AzDRGmMy14PK4Mce554IjysAhcEXsp_t/view?usp=sharing'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className='flex gap-2.5 items-center w-full mt-3 px-2.5 py-0.5 rounded-lg hover:bg-nav-button dark:hover:bg-nav-button-dark overflow-hidden cursor-pointer'
            >
              <div className='my-2 text-2xl'><BiFile /></div>
              <div>Resume</div>
            </motion.div>
          </Link>
          <motion.div
            variants={desktopVariants}
            whileHover='itemHover' 
            whileTap='tap'
            className='mx-auto my-0'
            onClick={() => toggle()}
          >
            {
              theme === 'light'
              ?
                <div className='flex items-center mt-2.5 p-2 rounded-lg hover:bg-nav-button dark:hover:bg-nav-button-dark text-2xl cursor-pointer'>
                  <BiSun />
                </div>
              :
                <div className='flex items-center mt-2.5 p-2 rounded-lg hover:bg-nav-button dark:hover:bg-nav-button-dark text-2xl cursor-pointer'>
                  <BiMoon />
                </div>
            }
          </motion.div>
        </div>
      </motion.div>
      {/* mobile navbar */}
      <div className='z-100 fixed top-4 left-0 lg:hidden flex-col justify-start w-full px-4 font-semibold'>
        <div className={
          'rounded-lg bg-nav dark:bg-nav-dark backdrop-filter backdrop-saturate-50 backdrop-blur-lg shadow-light dark:shadow-dark overflow-hidden transition-height duration-200 ease-out '
          + (open ? 'h-nav-open' : 'h-nav')
        }>
          <div className='flex flex-col w-full p-2.5'>
            <div className='flex justify-between items-center w-full mb-0.5'>
              <div
                className='flex items-center p-2 rounded-lg hover:bg-nav-button dark:hover:bg-nav-button-dark text-2xl cursor-pointer'
                onClick={() => openNav()}
              >
                { !open && <BiMenu /> }
                { open && <BiX /> }
              </div>
              <div className='flex items-center p-2 rounded-lg bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark text-xl'>
                {router.pathname === '/' && <BiHomeAlt /> }
                {router.pathname === '/projects' && <BiGridAlt /> }
                {router.pathname.includes('/blog') && <BiEditAlt /> }
                {router.pathname === '/about' && <BiUser /> }
              </div>
              <div onClick={() => toggle()}>
                {
                  theme === 'light'
                  ?
                    <div className='flex items-center p-2 rounded-lg hover:bg-nav-button dark:hover:bg-nav-button-dark text-2xl cursor-pointer'>
                      <BiSun />
                    </div>
                  :
                    <div className='flex items-center p-2 rounded-lg hover:bg-nav-button dark:hover:bg-nav-button-dark text-2xl cursor-pointer'>
                      <BiMoon />
                    </div>
                }
              </div>
            </div>
            <Link passHref href='/'>
              <div
                className={
                  'flex gap-2.5 items-center mt-2 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent dark:hover:bg-accent-dark hover:text-text-active dark:hover:text-text-active-dark cursor-pointer '
                  + (router.pathname === '/' && 'bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark')
                }
                onClick={() => setOpen(false)}
              >
                <div className='my-2 text-2xl'><BiHomeAlt /></div>
                <div>Home</div>
              </div>
            </Link>
            <Link passHref href='/projects'>
              <div
                className={
                  'flex gap-2.5 items-center mt-2 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent dark:hover:bg-accent-dark hover:text-text-active dark:hover:text-text-active-dark cursor-pointer '
                  + (router.pathname === '/projects' && 'bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark')
                }
                onClick={() => setOpen(false)}
              >
                <div className='my-2 text-2xl'><BiGridAlt /></div>
                <div>Projects</div>
              </div>
            </Link>
            <Link passHref href='/blog'>
              <div
                className={
                  'flex gap-2.5 items-center mt-2 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent dark:hover:bg-accent-dark hover:text-text-active dark:hover:text-text-active-dark cursor-pointer '
                  + (router.pathname === '/blog' && 'bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark')
                }
                onClick={() => setOpen(false)}
              >
                <div className='my-2 text-2xl'><BiEditAlt /></div>
                <div>Blog</div>
              </div>
            </Link>
            <Link passHref href='/about'>
              <div
                className={
                  'flex gap-2.5 items-center mt-2 px-2.5 py-0.5 rounded-lg overflow-hidden hover:bg-accent dark:hover:bg-accent-dark hover:text-text-active dark:hover:text-text-active-dark cursor-pointer '
                  + (router.pathname === '/about' && 'bg-accent dark:bg-accent-dark text-text-active dark:text-text-active-dark')
                }
                onClick={() => setOpen(false)}
              >
                <div className='my-2 text-2xl'><BiUser /></div>
                <div>About</div>
              </div>
            </Link>
          </div>
          <div className='flex flex-col w-full p-3 pt-0 rounded-bl-lg rounded-br-lg bg-nav-accent dark:bg-nav-accent-dark backdrop-filter backdrop-saturate-50 backdrop-blur-lg'>
            <Link passHref href='https://drive.google.com/file/d/1AzDRGmMy14PK4Mce554IjysAhcEXsp_t/view?usp=sharing'>
              <div className='flex gap-2.5 items-center w-full mt-3 px-2.5 py-0.5 rounded-lg hover:bg-nav-button dark:hover:bg-nav-button-dark overflow-hidden cursor-pointer'>
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
          + ( open ? "z-90 visible" : "z-0 invisible" )
        }
        onClick={() => setOpen(false)}
      />
    </>
  )
}
