import MobileNav from '../components/MobileNav'

import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <main className={styles.layout}>
      <MobileNav />
      <div className={styles.wrapper}>
        {children}
      </div>
    </main>
  )
}
