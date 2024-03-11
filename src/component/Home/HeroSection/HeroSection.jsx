import React from 'react'
import { Button } from "../../index"
import { heroText } from '../../data/data'
import { PopupButton } from "react-calendly";

const HeroSection = () => {

    return (
        <div className='lg:flex-row flex flex-col-reverse p-2 pt-0 lg:p-5  justify-center items-center mx-auto'>
            {/* Left Text */}
            <div className=' p-2 lg:w-5/12 w-full text-wrap lg:block  '>
                <h1 className=' lg:text-6xl text-4xl  font-extrabold font-josefin text-light_dark-1 mb-7 px-10 lg:px-0 '>
                    {heroText.heading.split("DIGITAL SOLUTION")[0]}
                    <span className='text-white_new-0'>DIGITAL SOLUTION</span>
                </h1>
                <p className='font-poppins w-full text-white-0 mb-3 lg:text-base p-4 px-10 lg:px-0  '>{heroText.para}</p>
                <div className='lg:px-0 px-10'>

                <div className='p-[0.15rem] rounded-md hover:scale-105 transition duration-500 transform w-fit h-fit
                bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                hover:bg-gradient-to-r hover:from-blue-500  hover:via-pink-500 hover:to-purple-500'>
                        <PopupButton
                            url="https://calendly.com/mraanandtech/viralvox?fbclid=PAAab3kowkrtOTluWtUkQSbFDihJw7X5OL469LduRQJdXBCuGBGNrgPyUCLGE&month=2024-03"
                            rootElement={document.getElementById("root")}
                            text="Click here to schedule!"
                            className='bg-light_dark-1 text-white lg:text-base  text-center font-bold lg:py-2 lg:px-4 px-4 py-3  rounded-md text-1xl hover:bg-light_dark-2 transition-colors duration-500 ease-in-out'
                        />
                </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-2/5  h-full drop-shadow-mist shadow-light_dark-1  ">
                <img src={heroText.image} alt="image" className=' lg:w-full lg:h-full w-[20rem] h-[20rem] hover:scale-110 transition-transform duration-[5000ms] ease-in-out' />
            </div>
        </div>

    )
}

export default HeroSection