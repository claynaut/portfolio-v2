import Link from 'next/link'

import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>© 2021 J.S. Pescasio. All Rights Reserved.</div>
      <div className={styles.links}>
        <Link passHref href='mailto:hello@jspescas.io'>
          <div><FiMail className={styles.link}/></div>
        </Link>
        <Link passHref href='https://github.com/claynaut'>
          <div><FiGithub className={styles.link}/></div>
        </Link>
        <Link passHref href='https://www.linkedin.com/in/jspescasio/'>
          <div><FiLinkedin className={styles.link}/></div>
        </Link>
        <Link passHref href='https://twitter.com/claynaut'>
          <div><FiTwitter className={styles.link}/></div>
        </Link>
      </div>
    </div>
  )
}
