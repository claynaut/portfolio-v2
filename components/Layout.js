import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <motion.main
        layoutId={router.pathname}
        initial={{ opacity: 0, x: -200, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: -100 }}
        transition={{
          type: 'linear',
          ease: 'easeOut',
          duration: 0.225
        }}
        className='hidden xl:flex flex-col xl:flex-row justify-center items-center px-4 w-full min-h-screen'
      >
        <div className='xl:relative w-full max-w-[60rem]'>
          {children}
        </div>
      </motion.main>
      <main className='flex xl:hidden flex-col xl:flex-row justify-center items-center px-4 w-full min-h-screen'>
        <div className='xl:relative w-full max-w-[60rem]'>
          {children}
        </div>
      </main>
    </>
  )
}
