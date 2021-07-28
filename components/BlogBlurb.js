import Link from 'next/link'

import styles from '../styles/BlogBlurb.module.css'

export default function BlogBlurb(props) {
  return (
    <Link passHref href={props.link}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.date}>{props.date}</div>
        </div>
        <div className={styles.caption}>{props.caption}</div>
      </div>
    </Link>
  )
}
