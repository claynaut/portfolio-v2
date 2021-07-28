import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/BlogBlurb.module.css'

export default function BlogBlurb(props) {
  const [isMobile, setIsMobile] = useState(false)
  var desktopVariants = {}
  if (!isMobile)
    desktopVariants = {
      hover: { scale: 1.02 },
      tap: { scale: 0.995},
    }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <Link passHref href={props.link}>
      <motion.div 
        variants={desktopVariants}
        whileHover='hover'
        whileTap='tap' 
        transition={{ ease: 'easeInOut', duration: 0.1 }}
        className={styles.container}
      >
        <div className={styles.header}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.date}>{props.date}</div>
        </div>
        <div className={styles.caption}>{props.caption}</div>
      </motion.div>
    </Link>
  )
}
