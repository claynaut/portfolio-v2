import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavLinkProps {
  href: string
  title: string
}

const NavLink = ({ href, title }: NavLinkProps) => {
  const router = useRouter()

  return (
    <Link passHref href={href}>
      <span
        className={
          'mx-4 hover:text-secondary cursor-pointer ' +
          ((
            href !== '/'
              ? router.pathname.includes(href)
              : router.pathname === href
          )
            ? 'font-bold'
            : 'text-secondary-light')
        }
      >
        {title}
      </span>
    </Link>
  )
}

const ResumeLink = () => {
  return (
    <a target='_blank' rel='noreferrer noopener' href='/resume_jspescasio.pdf'>
      <span className='px-4 py-2 bg-accent rounded-full text-primary font-semibold'>
        Resume
      </span>
    </a>
  )
}

export const Navbar = () => {
  return (
    <nav className='fixed top-4 left-1/2 -translate-x-1/2 flex gap-8 p-3 rounded-md shadow-md'>
      <NavLink href='/' title='Home' />
      <NavLink href='/projects' title='Projects' />
      <NavLink href='/about' title='About' />
      <ResumeLink />
    </nav>
  )
}
