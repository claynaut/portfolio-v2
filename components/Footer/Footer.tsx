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
    <motion.div whileHover={{ rotate: '-10deg' }} className='hover:text-accent'>
      <a target='_blank' rel='noreferrer noopener' href={href}>
        <div className='text-2xl'>{icon}</div>
      </a>
    </motion.div>
  )
}

export const Footer = () => {
  return (
    <div className='flex w-full -mt-[3.75rem] xl:mt-0 xl:w-auto justify-center xl:fixed xl:top-1/2 xl:-translate-y-1/2 xl:right-[1.75rem]'>
      <div className='relative flex flex-row-reverse xl:flex-col gap-6 text-secondary-light'>
        {links.map(({ icon, href }) =>
          <FooterLink key={href} icon={icon} href={href} />
        )}
        <div className='xl:absolute mt-0.5 xl:mt-0 whitespace-nowrap xl:-rotate-90 origin-bottom-right -bottom-6 right-0.5 text-sm'>
          © 2021-2022 J.S. Pescasio
        </div>
      </div>
    </div>
  )
}