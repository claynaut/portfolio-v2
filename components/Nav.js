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

import styles from '../styles/Nav.module.css'
import mobileStyles from '../styles/MobileNav.module.css'

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
      <motion.div
        variants={desktopVariants}
        whileHover='navHover'
        className={styles.navbar} 
      >
        <div className={styles.top}>
          <div className={styles.menu}><BiMenu /></div>
          <Link passHref href='/'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={
                router.pathname === '/' 
                ? `${styles.active} ${styles.icontext}`
                : `${styles.icontext}`
              }
            >
              <div className={styles.icon}><BiHomeAlt /></div>
              <div>Home</div>
            </motion.div>
          </Link>
          <Link passHref href='/projects'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={
                router.pathname === '/projects' 
                ? `${styles.active} ${styles.icontext}`
                : `${styles.icontext}`
              }
            >
              <div className={styles.icon}><BiGridAlt /></div>
              <div>Projects</div>
            </motion.div>
          </Link>
          <Link passHref href='/blog'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={
                router.pathname.includes('/blog')
                ? `${styles.active} ${styles.icontext}`
                : `${styles.icontext}`
              }
            >
              <div className={styles.icon}><BiEditAlt /></div>
              <div>Blog</div>
            </motion.div>
          </Link>
          <Link passHref href='/about'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={
                router.pathname === '/about' 
                ? `${styles.active} ${styles.icontext}`
                : `${styles.icontext}`
              }
            >
              <div className={styles.icon}><BiUser /></div>
              <div>About</div>
            </motion.div>
          </Link>
        </div>
        <div className={styles.bottom}>
          <Link passHref href='https://drive.google.com/file/d/1FpHbai8UVdBYqs-0JDN9VEHnJl0ursV8/view?usp=sharing'>
            <motion.div
              variants={desktopVariants}
              whileHover='itemHover' 
              whileTap='tap'
              className={styles.button}
            >
              <div className={styles.icon}><BiFile /></div>
              <div>Resume</div>
            </motion.div>
          </Link>
          <motion.div
            variants={desktopVariants}
            whileHover='itemHover' 
            whileTap='tap'
            className={styles.themes}
            onClick={() => toggle()}
          >
            <div 
              className={
                theme === 'light' 
                  ? `${styles.icon}`
                  : `${styles.hidden} ${styles.icon}`
              }
            >
              <BiSun />
            </div>
            <div 
              className={
                theme === 'dark' 
                  ? `${styles.icon}`
                  : `${styles.hidden} ${styles.icon}`
              }
            >
              <BiMoon />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className={mobileStyles.navbar}>
        <div className={
          open 
          ? `${mobileStyles.open} ${mobileStyles.navwrapper}`
          : `${mobileStyles.navwrapper}`
        }>
          <div className={mobileStyles.top}>
            <div className={mobileStyles.menuwrapper}>
              <div className={mobileStyles.menu} onClick={() => openNav()}>
                { !open && <BiMenu /> }
                { open && <BiX /> }
              </div>
              <div className={mobileStyles.selected}>
                <BiHomeAlt className={router.pathname !== '/' && mobileStyles.hidden}/>
                <BiGridAlt className={router.pathname !== '/projects' && mobileStyles.hidden}/>
                <BiEditAlt className={!router.pathname.includes('/blog') && mobileStyles.hidden}/>
                <BiUser className={router.pathname !== '/about' && mobileStyles.hidden}/>
              </div>
              <div
                className={mobileStyles.themes}
                onClick={() => toggle()}
              >
                <div className={theme !== 'light' && mobileStyles.hidden}>
                  <BiSun />
                </div>
                <div className={theme !== 'dark' && mobileStyles.hidden}>
                  <BiMoon />
                </div>
              </div>
            </div>
            <Link passHref href='/'>
              <div
                className={
                  router.pathname === '/' 
                  ? `${mobileStyles.active} ${mobileStyles.icontext}`
                  : `${mobileStyles.icontext}`
                }
                onClick={() => setOpen(false)}
              >
                <div className={mobileStyles.icon}><BiHomeAlt /></div>
                <div>Home</div>
              </div>
            </Link>
            <Link passHref href='/projects'>
              <div
                className={
                  router.pathname === '/projects' 
                  ? `${mobileStyles.active} ${mobileStyles.icontext}`
                  : `${mobileStyles.icontext}`
                }
                onClick={() => setOpen(false)}
              >
                <div className={mobileStyles.icon}><BiGridAlt /></div>
                <div>Projects</div>
              </div>
            </Link>
            <Link passHref href='/blog'>
              <div
                className={
                  router.pathname.includes('/blog')
                  ? `${mobileStyles.active} ${mobileStyles.icontext}`
                  : `${mobileStyles.icontext}`
                }
                onClick={() => setOpen(false)}
              >
                <div className={mobileStyles.icon}><BiEditAlt /></div>
                <div>Blog</div>
              </div>
            </Link>
            <Link passHref href='/about'>
              <div
                className={
                  router.pathname === '/about' 
                  ? `${mobileStyles.active} ${mobileStyles.icontext}`
                  : `${mobileStyles.icontext}`
                }
                onClick={() => setOpen(false)}
              >
                <div className={mobileStyles.icon}><BiUser /></div>
                <div>About</div>
              </div>
            </Link>
          </div>
          <div className={mobileStyles.bottom}>
            <Link passHref href='https://drive.google.com/file/d/1FpHbai8UVdBYqs-0JDN9VEHnJl0ursV8/view?usp=sharing'>
              <div
                className={mobileStyles.button}
              >
                <div className={mobileStyles.icon}><BiFile /></div>
                <div>Resume</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
