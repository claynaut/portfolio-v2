import React, { useState } from 'react'

import { HiMinusSm, HiPlus } from 'react-icons/hi'

import styles from '../styles/TimeAccordion.module.css'

export default function TimeAccordion( props ) {
  const [open, setOpen] = useState(true)

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
      </div>
    </div>
  )
}