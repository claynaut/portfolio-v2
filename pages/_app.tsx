import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import 'tailwind.source.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
