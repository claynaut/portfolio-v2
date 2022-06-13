import { motion } from 'framer-motion'
import { FaRegEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const links = [
  {
    icon: <FaRegEnvelope />,
    href: 'mailto:hello@jspescas.io',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/claynaut',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/jspescasio',
  },
]

interface FooterLinkProps {
  icon: React.ReactNode
  href: string
}

const FooterLink = ({ icon, href }: FooterLinkProps) => {
  return (
    <motion.div whileHover={{ rotate: '-15deg' }} className='hover:text-accent'>
      <a target='_blank' rel='noreferrer noopener' href={href}>
        <div className='text-2xl'>{icon}</div>
      </a>
    </motion.div>
  )
}

export const Footer = () => {
  return (
    <div className='fixed top-1/2 -translate-y-1/2 right-[1.75rem]'>
      <div className='relative flex flex-col gap-6 text-secondary-light'>
        {links.map(({ icon, href }) =>
          <FooterLink key={href} icon={icon} href={href} />
        )}
        <div className='absolute whitespace-nowrap -rotate-90 origin-bottom-right -bottom-6 right-0 text-base'>
          © 2021-2022 J.S. Pescasio
        </div>
      </div>
    </div>
  )
}