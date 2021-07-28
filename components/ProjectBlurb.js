import Link from 'next/link'

import styles from '../styles/ProjectBlurb.module.css'

export default function ProjectBlurb(props) {
  return (
    <Link passHref href={props.link}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.date}>{props.date}</div>
        </div>
        <div className={styles.caption}>{props.caption}</div>
        <div className={styles.tags}>{props.children}</div>
      </div>
    </Link>
  )
}
