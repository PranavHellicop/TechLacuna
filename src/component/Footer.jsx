import React from 'react'
import { FaFacebook, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        // flex justify-between items-center p-2 pt-0 mb-0 m-4 pb-0 border border-x-light_dark-1 border-t-light_dark-1 border-b-light_dark-0 bg-light_dark-0 sticky top-0 z-10
        <footer className=" flex flex-col justify-center lg:space-y-16 h-64 lg:p-3 p-1 mb-0 m-4 pb-0 mt-0 lg:pt-5 pt-0 border  border-b-light_dark-1 border-x-light_dark-1 border-t-light_dark-0  text-white  relative bottom-1 shadow-shadow-top rounded-md">
            <div className='flex flex-col lg:space-y-5 space-y-7 '>
                <div className=''>
                    <p className='lg:text-center lg:text-4xl text-[1.1rem] text-center font-josefin'>Unleash Your Digital Potential with Tech Lacuna's Premier Services & Tools</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-center'>
                        <p className="font-josefin lg:text-xl text-lg mb-3">FOLLOW US</p>
                        <div className="flex space-x-4 lg:text-3xl text-lg">
                            <a href="https://www.facebook.com/piyush8729/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/mr_anand_tech/" target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare />
                            </a>
                            <a href="https://wa.me/7759853295" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className='' />
                            </a>
                            <a href="https://www.linkedin.com/in/piyush-anand-tech/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='' />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col item-center ">
                        <div className='flex justify-center space-x-2  p-2'>
                            <BiSolidPhoneCall className='lg:text-3xl text-lg text-light_dark-1' />
                            <p className='lg:text-xl text-lg font-josefin'>CALL US</p>
                        </div>
                        <p className='text-center lg:text-lg text-sm '>+91-7759853295</p>

                    </div>
                </div>

            </div>
            <div>

                <div className="h-0.5 w-full mt-5 lg:m-0 bg-gradient-to-r from-transparent via-white_new-0 to-transparent mb-6"></div>
                <div className='flex justify-center items-center space-x-10'>
                    <NavLink to="/privacy">

                        <p className='text-center  text-xs'>Privacy Policy</p>
                    </NavLink>
                    <p className='text-center lg:text-base text-xs'>&copy; 2024 Tech Lacuna All Rights Reserved</p>
                    <NavLink to="/terms">

                    <p className='text-center text-xs'>Terms & Conditions</p>
                    </NavLink>
                </div>
            </div>



        </footer>

    )
}

export default Footer