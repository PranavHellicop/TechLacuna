import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = ({src}) => {
  return (
    <NavLink to="/">
    <div className='lg:p-0 p-1 flex justify-center'>
        <div>
          <img src={src} alt="Logo" className='w-10 h-10 ' />
        </div>
        <h1 className=' lg:h-fit  text-center font-oswald lg:text-3xl text-xl py-1 lg:p-0 font-extrabold '><span className='text-[#C18E39]'>T</span>ech<span className="text-[#C18E39]">L</span>acuna AI (OPC) Private Limited</h1>
    </div>

    </NavLink>
  )
}

export default Logo