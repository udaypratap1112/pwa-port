import { nav, th } from 'framer-motion/client'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const theme = useRef(null)
  const [isDark, setIsDark] = useState(false)
 
    
    function toogleTheme() {
        document.body.classList.toggle('dark')
        setIsDark(prev => !prev)
        
  } 

  function navigate(percentage) {
    const container = document.querySelector('.hero')
    if (container) {
      const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrollPosition = (percentage / 100) * scrollHeight;
   container.scrollTo({ top:scrollPosition})
    }
    
  }

  return (
      <div className='fixed top-0 left-0 w-screen h-14 z-50 dark:text-text-dark flex justify-between items-center px-3 sm:px-10 pr-6  '>
            <h1 className="navLogo text-2xl sm:text-4xl italic font-bold "onClick={()=>{navigate(0)}} >
            <span>u</span><span>d</span><span>a</span><span>y</span>
          </h1>
          <div className="navlinks text-sm sm:text-base flex gap-3 sm:gap-5 font-medium">
            <p className='select-none' onClick={()=>{navigate(0)}}>HOME</p>
            <p className='select-none'  onClick={()=>{navigate(40)}}>WORK</p>
            <p className='select-none'  onClick={()=>{navigate(100)}}>CONTACT</p>
          </div>
          <div className="themeSelector flex items-center" onClick={toogleTheme}>
            <p ref={theme}  className='mr-2 font-medium hidden sm:block'>MODE</p>
              <span className={`w-3 sm:w-5 aspect-square inline-block  rounded-full bg-white transition-all mr-[2px] ${isDark?'scale-110':''}`}></span>
              <span className={`w-3 sm:w-5 aspect-square inline-block  rounded-full bg-black transition-all ${!isDark?'scale-110':''}`}></span>

        </div>
    </div>
  )
}

export default Navbar