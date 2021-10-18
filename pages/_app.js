import { ThemeProvider } from 'next-themes'
import Nav from '../components/Nav'

import 'tailwindcss/tailwind.css'
import '../tailwind.source.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
