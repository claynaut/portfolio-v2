import { ThemeProvider } from 'next-themes'
import Nav from '@/components/Nav'
import Themes from '@/components/Themes'

import 'tailwindcss/tailwind.css'
import 'tailwind.source.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false}>
      <Nav />
      <Themes />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
