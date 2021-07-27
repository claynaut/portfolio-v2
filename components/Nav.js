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

  const toggle = () => {
    var currentTheme = document.documentElement.getAttribute('data-theme')
    var targetTheme = 'light'

    if (currentTheme === 'light') {
        targetTheme = 'dark'
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
    setTheme(targetTheme)
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    document.documentElement.setAttribute('data-theme', theme)
  })

  return (
    <motion.div 
      whileHover={{ width: 200 }}
      className={styles.navbar} 
    >
      <div className={styles.top}>
        <div className={styles.menuwrapper}>
          <BiMenu className={styles.menu} />
        </div>
        <Link passHref href='/'>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
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
            whileHover={{ scale: 1.05 }} 
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
            whileHover={{ scale: 1.05 }} 
            className={
              router.pathname === '/blog' 
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
            whileHover={{ scale: 1.05 }} 
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
        <Link passHref href='/'>
          <motion.div whileHover={{ scale: 1.05 }} className={styles.button}>
            <div className={styles.icon}><BiFile /></div>
            <div>Resume</div>
          </motion.div>
        </Link>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
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
