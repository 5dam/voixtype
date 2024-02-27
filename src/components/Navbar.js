import {MdDarkMode} from 'react-icons/md'
import {BsSunFill} from 'react-icons/bs'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [theme, setTheme] = useState("dark")

  useEffect(() => {
      if (theme === "dark") {
          document.documentElement.classList.add("dark");
      } else {
          document.documentElement.classList.remove("dark");
      }
  })

  const switchTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
  }

  const isDark = theme === 'dark'

  return (
    <div className='flex justify-between items-center'>
        <p className='font-extrabold font-montserrat text-4xl dark:text-white'>Voixtype</p>
        <button onClick={switchTheme} className='dark:text-white text-black transition duration-300 delay-150'>{isDark ? <BsSunFill className='text-2xl animate-pulse' /> : <MdDarkMode className='text-2xl' />}</button>
    </div>
  )
}

export default Navbar