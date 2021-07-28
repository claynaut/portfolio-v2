import styles from '../styles/TimeBlurb.module.css'

export default function TimeBlurb(props) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{props.icon}</div>
      <div className={styles.description}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.caption}>{props.caption}</div>
      </div>
    </div>
  )
}
