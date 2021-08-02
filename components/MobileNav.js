import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

import styles from '../styles/MobileNav.module.css'

export default function Nav() {
  const router = useRouter()
  const [theme, setTheme] = useState('')
  const [open, setOpen] = useState(false)

  const toggle = () => {
    var currentTheme = document.documentElement.getAttribute('data-theme')
    var targetTheme = 'light'

    if (currentTheme === 'light') { targetTheme = 'dark' }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
    setTheme(targetTheme)
  }

  const openNav = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={styles.navbar}>
      <div className={
        open 
        ? `${styles.open} ${styles.navwrapper}`
        : `${styles.navwrapper}`
      }>
        <div className={styles.top}>
          <div className={styles.menuwrapper}>
            <div className={styles.menu} onClick={() => openNav()}><BiMenu /></div>
            <div className={styles.selected}>
              <BiHomeAlt className={router.pathname !== '/' && styles.hidden}/>
              <BiGridAlt className={router.pathname !== '/projects' && styles.hidden}/>
              <BiEditAlt className={!router.pathname.includes('/blog') && styles.hidden}/>
              <BiUser className={router.pathname !== '/about' && styles.hidden}/>
            </div>
            <div
              className={styles.themes}
              onClick={() => toggle()}
            >
              <div className={theme !== 'light' && styles.hidden}>
                <BiSun />
              </div>
              <div className={theme !== 'dark' && styles.hidden}>
                <BiMoon />
              </div>
            </div>
          </div>
          <Link passHref href='/'>
            <div
              className={
                router.pathname === '/' 
                ? `${styles.active} ${styles.icontext}`
                : `${styles.icontext}`
              }
              onClick={() => setOpen(false)}
            >
              <div className={styles.icon}><BiHomeAlt /></div>
              <div>Home</div>
            </div>
          </Link>
          <Link passHref href='/projects'>
            <div
              className={
                router.pathname === '/projects' 
                ? `${styles.active} ${styles.icontext}`
                : `${styles.icontext}`
              }
              onClick={() => setOpen(false)}
            >
              <div className={styles.icon}><BiGridAlt /></div>
              <div>Projects</div>
            </div>
          </Link>
          <Link passHref href='/blog'>
            <div
              className={
                router.pathname.includes('/blog')
                ? `${styles.active} ${styles.icontext}`
                : `${styles.icontext}`
              }
              onClick={() => setOpen(false)}
            >
              <div className={styles.icon}><BiEditAlt /></div>
              <div>Blog</div>
            </div>
          </Link>
          <Link passHref href='/about'>
            <div
              className={
                router.pathname === '/about' 
                ? `${styles.active} ${styles.icontext}`
                : `${styles.icontext}`
              }
              onClick={() => setOpen(false)}
            >
              <div className={styles.icon}><BiUser /></div>
              <div>About</div>
            </div>
          </Link>
        </div>
        <div className={styles.bottom}>
          <Link passHref href='https://bit.ly/jspescasio-resume-080221'>
            <div
              className={styles.button}
            >
              <div className={styles.icon}><BiFile /></div>
              <div>Resume</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
