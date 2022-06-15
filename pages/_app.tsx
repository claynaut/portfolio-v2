import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { ThemeToggle } from 'components/ThemeToggle'

import 'tailwindcss/tailwind.css'
import 'tailwind.source.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <Navbar />
      <ThemeToggle />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
