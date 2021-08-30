import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { HiMinusSm, HiPlus, HiChevronUp } from 'react-icons/hi'

import styles from '../styles/TimeAccordion.module.css'

export default function TimeAccordion( props ) {
  const [open, setOpen] = useState(true)

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
    <div className={open && styles.open}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        { open ? <HiMinusSm /> : <HiPlus /> }
        {props.year}
      </div>
      <div 
        className={
          props.length === 'xs' && styles.xs || // 1-2 items
          props.length === 'sm' && styles.sm || // 3-5 items
          props.length === 'md' && styles.md || // 6-8 items
          props.length === 'lg' && styles.lg || // 9-11 items
          props.length === 'xl' && styles.xl    // 12-15 items
        }
      >
        {props.children}
        {(props.length === 'md' || props.length === 'lg' || props.length === 'xl') && 
          <motion.button 
            variants={desktopVariants}
            whileHover='hover'
            whileTap='tap' 
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            onClick={() => setOpen(!open)}
            className={styles.button}
          >
            Show Less <HiChevronUp />
          </motion.button>
        }
      </div>
    </div>
  )
}