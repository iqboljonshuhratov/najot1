import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='p-[40px] bg-orange-400 flex justify-center gap-4 '> 
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/profile">Profile</Link>
    </div>
  )
}

export default Header
