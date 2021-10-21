
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { BiListUl, BiX } from 'react-icons/bi'

export default function BlogOutline({ bookmarks }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* desktop blog outline */}
      <div className='z-[100] fixed top-1/2 right-2 hidden 2xl:flex flex-col justify-center max-w-[15rem] p-2.5 rounded-lg rounded-bl-2xl bg-primary shadow-shadow font-medium transform -translate-y-1/2'>
        <h2 className='flex gap-2 items-center mt-0 mb-2 pt-2 pl-2 text-xl text-accent'>
          <BiListUl className='text-2xl' /> Outline
        </h2>
        <div className='flex gap-1.5 flex-col px-2 pb-2'>
          { bookmarks.map((bookmark) =>
            <Link 
              activeClass='text-accent'
              to={bookmark.value}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className={
                'text-base hover:text-accent cursor-pointer transition-all duration-150 '
                + (bookmark.value.includes('subheading') ? 'ml-6 text-sm' : 'text-base')
              }
            >
              {bookmark.title}
            </Link>
          )}
        </div>
      </div>
      {/* mobile blog outline */}
      <div 
        className={
          'z-[100] fixed bottom-2 right-2 hidden sm:flex 2xl:hidden flex-col justify-end items-start max-w-[15rem] p-2.5 rounded-lg rounded-tl-2xl bg-primary shadow-shadow font-medium overflow-hidden '
          + (!open && 'w-[3.75rem] h-[3.75rem]')
        }
      >
        <h2 className='flex gap-2 items-center mt-0 mb-2 pt-2 pl-2 text-xl text-accent'>
          <BiListUl className='text-2xl' /> Outline
        </h2>
        <div className='flex gap-1.5 flex-col px-2 pb-2'>
          { bookmarks.map((bookmark) =>
            <Link 
              activeClass='text-accent'
              to={bookmark.value}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className={
                'text-base hover:text-accent cursor-pointer transition-all duration-150 '
                + (bookmark.value.includes('subheading') ? 'ml-6 text-sm' : 'text-base')
              }
            >
              {bookmark.title}
            </Link>
          )}
        </div>
        <div
          className='flex self-end max-w-min p-2 rounded-lg rounded-tl-2xl hover:bg-nav-button text-2xl cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          { open
            ? <BiX />
            : <BiListUl />
          }
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