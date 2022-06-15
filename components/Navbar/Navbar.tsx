import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiMenu } from 'react-icons/bi'

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
    <a
      target='_blank'
      rel='noreferrer noopener'
      href='/resume_jspescasio.pdf'
      className='px-4 py-1 bg-accent rounded-full text-primary font-semibold'
    >
      Resume
    </a>
  )
}

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <nav
        className={
          'z-[100] fixed top-4 left-4 md:left-1/2 md:-translate-x-1/2 flex flex-col md:flex-row md:items-center gap-4 p-2 rounded-md rounded-br-2xl md:rounded-br-md bg-primary shadow-md overflow-hidden transition-size duration-150	 ' +
          (open
            ? 'w-1/2 md:w-auto min-w-[10rem] h-[17rem]'
            : 'w-12 md:w-auto h-12 md:h-auto')
        }
      >
        <button
          className={
            'md:hidden w-min text-2xl text-secondary-light hover:text-secondary transition-spacing duration-150 ' +
            (open ? 'p-3' : 'p-1')
          }
          onClick={() => setOpen(!open)}
          aria-label='Menu'
        >
          <BiMenu />
        </button>
        <div className='flex flex-col md:flex-row md:items-center gap-6 md:gap-8'>
          <NavLink href='/' title='Home' />
          <NavLink href='/projects' title='Projects' />
          <NavLink href='/about' title='About' />
          <ResumeLink />
        </div>
      </nav>
      <div
        className={
          'z-[99] fixed w-screen h-screen md:hidden ' +
          (open ? 'block' : 'hidden')
        }
        onClick={() => setOpen(false)}
      />
    </>
  )
}
