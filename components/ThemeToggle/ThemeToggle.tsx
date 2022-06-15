import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BiSun, BiMoon } from 'react-icons/bi'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='z-[100] fixed top-4 right-4 p-3 rounded-md rounded-bl-2xl shadow-md bg-primary text-secondary-light hover:text-secondary'
      aria-label='Theme Toggle'
    >
      <div className='text-2xl'>
        {theme === 'light' ? <BiSun /> : <BiMoon />}
      </div>
    </button>
  )
}
