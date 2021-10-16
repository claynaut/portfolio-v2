import { motion } from 'framer-motion'
import { FiMail, FiGithub, Fiaedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <div className='flex flex-col-reverse sm:flex-row sm:justify-between items-center mt-8 pt-6 border-t-1 border-border dark:border-border-dark'>
      <div className='text-sm'>
        © 2021 J.S. Pescasio. All Rights Reserved.
      </div>
      <div className='flex gap-4 mb-2 sm:mb-0 text-xl'>
        <a target='_blank' rel='noreferrer noopener' href='mailto:hello@jspescas.io'>
          <motion.div whileHover={{ y: -2 }}>
            <FiMail className='cursor-pointer hover:text-accent dark:hover:text-accent-dark' />
          </motion.div>
        </a>
        <a target='_blank' rel='noreferrer noopener' href='https://github.com/claynaut'>
          <motion.div whileHover={{ y: -2 }}>
            <FiGithub className='cursor-pointer hover:text-accent dark:hover:text-accent-dark' />
          </motion.div>
        </a>
        <a target='_blank' rel='noreferrer noopener' href='https://www.linkedin.com/in/jspescasio/'>
          <motion.div whileHover={{ y: -2 }}>
            <Fiaedin className='cursor-pointer hover:text-accent dark:hover:text-accent-dark' />
          </motion.div>
        </a>
        <a target='_blank' rel='noreferrer noopener' href='https://twitter.com/claynaut'>
          <motion.div whileHover={{ y: -2 }}>
            <FiTwitter className='cursor-pointer hover:text-accent dark:hover:text-accent-dark' />
          </motion.div>
        </a>
      </div>
    </div>
  )
}
