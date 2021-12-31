import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { 
  BiMenu,
  BiHomeAlt,
  BiCategory,
  BiEditAlt,
  BiUserCircle,
  BiFile,
  BiX
} from 'react-icons/bi'

export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const tabs = [
    {
      icon: <BiHomeAlt />,
      name: 'Home',
      link: '/',
    },
    {
      icon: <BiCategory />,
      name: 'Projects',
      link: '/projects',
    },
    {
      icon: <BiEditAlt />,
      name: 'Blog',
      link: '/blog',
    },
    {
      icon: <BiUserCircle />,
      name: 'About',
      link: '/about',
    },
  ]

  return (
    <>
      {/* desktop navbar */}
      <motion.div
        whileHover={{ width: 200 }}
        className='z-[100] fixed top-1/2 left-2 hidden xl:flex flex-col justify-center w-[4.25rem] rounded-lg rounded-br-2xl bg-primary shadow-shadow font-semibold transform -translate-y-1/2'
      >
        <div className='flex flex-col w-full p-3'>
          <div className='flex justify-center self-center p-2 text-2xl'>
            <BiMenu />
          </div>
          { tabs.map(({ icon, name, link }) =>
            <Link passHref href={link}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.995}} 
                className={
                  'flex gap-2.5 items-center mt-2.5 px-2.5 py-0.5 rounded-lg rounded-br-2xl overflow-hidden hover:bg-accent hover:text-accent-darkest cursor-pointer '
                  + ((link !== '/' ? router.pathname.includes(link) : router.pathname === link) && 'bg-accent text-accent-darkest')
                }
              >
                <div className='my-2 text-2xl'>{icon}</div>
                <div>{name}</div>
              </motion.div>
            </Link>
          )}
        </div>
        <div className='flex flex-col w-full p-3 pt-0 rounded-b-lg rounded-br-2xl bg-nav-accent backdrop-filter backdrop-saturate-50 backdrop-blur-lg'>
          <a target='_blank' rel='noreferrer noopener' href='/resume.pdf'>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995}} 
              className='flex gap-2.5 items-center w-full mt-3 px-2.5 py-0.5 rounded-lg rounded-br-2xl hover:bg-nav-button overflow-hidden cursor-pointer'
            >
              <div className='my-2 text-2xl'><BiFile /></div>
              <div>Resume</div>
            </motion.div>
          </a>
        </div>
      </motion.div>
      {/* mobile navbar */}
      <div className='z-[100] fixed top-2 left-0 flex xl:hidden justify-start px-2 font-semibold'>
        <div className={
          'rounded-lg rounded-br-2xl bg-primary shadow-shadow overflow-hidden transition-size duration-200 ease-out '
          + (open ? 'w-44 h-[21rem]' : 'w-[3.75rem] h-[3.75rem]')
        }>
          <div className='flex flex-col p-2.5'>
            <div className='flex items-center w-full mb-0.5'>
              <div
                className='flex items-center p-2 rounded-lg rounded-br-2xl hover:bg-nav-button text-2xl cursor-pointer'
                onClick={() => setOpen(!open)}
              >
                { !open && <BiMenu /> }
                { open && <BiX /> }
              </div>
            </div>
            { tabs.map(({ icon, name, link }) =>
              <Link passHref href={link}>
                <div
                  className={
                    'flex gap-2.5 items-center mt-2 px-2.5 py-0.5 rounded-lg rounded-br-2xl overflow-hidden hover:bg-accent hover:text-accent-darkest cursor-pointer '
                    + ((link !== '/' ? router.pathname.includes(link) : router.pathname === link) && 'bg-accent text-accent-darkest')
                  }
                  onClick={() => setOpen(false)}
                >
                  <div className='my-2 text-2xl'>{icon}</div>
                  <div>{name}</div>
                </div>
              </Link>
            )}
          </div>
          <div className='flex flex-col w-full p-3 pt-0 rounded-b-lg rounded-br-2xl bg-nav-accent backdrop-filter backdrop-saturate-50 backdrop-blur-lg'>
            <a target='_blank' rel='noreferrer noopener' href='/resume.pdf'>
              <div className='flex gap-2.5 items-center w-full mt-3 px-2.5 py-0.5 rounded-lg rounded-br-2xl hover:bg-nav-button overflow-hidden cursor-pointer'>
                <div className='my-2 text-2xl'><BiFile /></div>
                <div>Resume</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full bg-transparent transition-all duration-150 '
          + ( open ? 'z-[90] visible' : 'z-0 invisible' )
        }
        onClick={() => setOpen(false)}
      />
    </>
  )
}
