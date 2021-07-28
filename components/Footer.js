import Link from 'next/link'
import { motion } from 'framer-motion'

import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>© 2021 J.S. Pescasio. All Rights Reserved.</div>
      <div className={styles.links}>
        <Link passHref href='mailto:hello@jspescas.io'>
          <motion.div whileHover={{ y: -2 }}>
            <FiMail className={styles.link}/>
          </motion.div>
        </Link>
        <Link passHref href='https://github.com/claynaut'>
          <motion.div whileHover={{ y: -2 }}>
            <FiGithub className={styles.link}/>
          </motion.div>
        </Link>
        <Link passHref href='https://www.linkedin.com/in/jspescasio/'>
          <motion.div whileHover={{ y: -2 }}>
            <FiLinkedin className={styles.link}/>
          </motion.div>
        </Link>
        <Link passHref href='https://twitter.com/claynaut'>
          <motion.div whileHover={{ y: -2 }}>
            <FiTwitter className={styles.link}/>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
