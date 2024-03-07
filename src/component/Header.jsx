import React from 'react'
import { Logo } from "./index"
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from "./index"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';


const Header = () => {
  const [navOpen, setIsNavOpen] = useState(false)
  const { pathname } = useLocation()
  const navItems = [

    {
      itemName: "Home",
      path: "/"
    },
    {
      itemName: "About",
      path: "/about"
    },
    {
      itemName: "Services",
      path: "/services"
    },
    {
      itemName: "Contact",
      path: "/contact"
    }

  ]

  return (
    <header className='sticky top-0 z-10' >
      <div className={`lg:flex justify-between hidden items-center pt-0 mb-0 m-4 pb-0 border  border-x-light_dark-1 border-t-light_dark-1 border-b-light_dark-0 ${pathname === "/about" ? "bg-light_dark-1 border-b-light_dark-1" : "bg-light_dark-1"} rounded-md `}>
        <div className=''>
          <Logo src="./Images/logo1.webp" />
        </div>

        <ul className='flex font-poppins justify-center items-center space-x-10 font-sans_serif'>
          {navItems.map((item) => (
            <NavLink to={item.path} className="hover:bg-light_dark-2 rounded-lg p-2 hover:text-white transition duration-300 ease-in-out">
              <Tilt>

                <li key={item.itemName} className='font-bold hover:scale-105'>{item.itemName}</li>
              </Tilt>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className={`flex justify-between items-center pl-1 pr-3 overflow-x-hidden lg:hidden ${pathname === "/about" ? "bg-light_dark-1 border-b-light_dark-1" : "bg-light_dark-1"} rounded-md sticky top-0`}>
        <div className=''>
          <Logo src="./Images/logo1.webp" />
        </div>
        <div className=''>
          {!navOpen ?
            <GiHamburgerMenu onClick={() => setIsNavOpen(!navOpen)} className='text-3xl cursor-pointer text-white' />
            :
            <ImCross onClick={() => setIsNavOpen(!navOpen)} className='text-3xl cursor-pointer text-white' />
          }
        </div>

      </div>
      {navOpen &&
        <ul className={`flex justify-center w-full items-center flex-col space-y-4 absolute top-14  p-5 bg-light_dark-1 z-10`}>
          {navItems.map((item) => (
            <NavLink to={item.path} className="text-white hover:text-gray-400 bg-light_dark-2 p-2 rounded-md w-full text-center" onClick={() => setIsNavOpen(!navOpen)} >
              <li key={item.itemName} className='font-bold text-lg'>{item.itemName}</li>
            </NavLink>
          ))}
        </ul>
      }
      {/* </div> */}




    </header>
  )
}

export default Header