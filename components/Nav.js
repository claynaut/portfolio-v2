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
  BiMoon
} from 'react-icons/bi'

import styles from '../styles/Nav.module.css'

export default function Nav() {
  const router = useRouter()
  const [theme, setTheme] = useState('')

  var desktopVariants = {
    navHover: { width: 200 },
    itemHover: { scale: 1.05 },
    tap: { scale: 0.995 },
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
  }, [theme])

  return (
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
        <Link passHref href='https://bit.ly/jspescasio-resume-080221'>
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
  )
}
