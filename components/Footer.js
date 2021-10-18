import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  const socials = [
    {
      icon: <FiMail title='Email'/>,
      link: 'mailto:hello@jspescas.io',
    },
    {
      icon: <FiGithub title='Github'/>,
      link: 'https://github.com/claynaut',
    },
    {
      icon: <FiLinkedin title='LinkedIn'/>,
      link: 'https://www.linkedin.com/in/jspescasio/',
    },
    {
      icon: <FiTwitter title='Twitter'/>,
      link: 'https://twitter.com/claynaut',
    },
  ]
  return (
    <div className='flex flex-col-reverse sm:flex-row sm:justify-between items-center mt-6 pt-6 border-t-2 border-border'>
      <div className='text-sm'>
        © 2021 J.S. Pescasio. All Rights Reserved.
      </div>
      <div className='flex gap-4 mb-2 sm:mb-0 text-xl'>
        { socials.map(({ icon, link }) =>
          <a
            target='_blank'
            rel='noreferrer noopener'
            href={link}
          >
            <motion.div
              whileHover={{ y: -3 }}
              className='cursor-pointer hover:text-accent'
            >
              {icon}
            </motion.div>
          </a>
        )}
      </div>
    </div>
  )
}
