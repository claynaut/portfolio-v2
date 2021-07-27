import Layout from '../components/Layout'
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Nav />
      <Component {...pageProps} />
    </Layout>
  )
}
