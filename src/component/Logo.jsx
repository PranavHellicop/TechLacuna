import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = ({src}) => {
  return (
    <NavLink to="/">
    <div className='lg:p-0 p-1 flex justify-center items-center'>
        <div>

        <img src={src} alt="Logo" className='w-10 h-10' />
        </div>
        <h1 className=' h-fit font-montserrat text-3xl lg:p-0 font-extrabold '><span className='text-[#C18E39]'>T</span>ech<span className="text-[#C18E39]">L</span>acuna AI</h1>
    </div>

    </NavLink>
  )
}

export default Logo