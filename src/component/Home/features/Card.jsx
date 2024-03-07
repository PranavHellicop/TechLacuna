import React from 'react'
import { useState } from 'react';

const Card = ({ heading, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    const manageHoverIn = () => {
        setIsHovered(true)
    }
    const manageHoverOut = () => {
        setIsHovered(false)
    }

    return (
        <div>
            <div className='lg:hidden flex flex-col items-center p-2 h-64 justify-center '>
                <div className="w-1/3 ">
                    <img src="./Images/ad.svg" alt="logo" />
                </div>

                <div className=" text-center ">
                    <h1 className=" text-[1.2rem]  mb-5">{heading}</h1>
                    <p className="text-[0.75rem] leading-4 text-wrap">{content}</p>
                </div>
            </div>

            <div className='max-h-fit hidden lg:block overflow-hidden w-fit pt-12 mx-auto'>
                <div className={`w-96 h-64 relative
            box bg-transparent p-2`}
                    onMouseEnter={manageHoverIn}
                    onMouseLeave={manageHoverOut}>
                    <div className={`w-2/5 lg:absolute bottom-1/3  ${isHovered ? "lg:translate-x-full lg:-translate-y-full lg:scale-150 " : ""}  lg:transition-transform lg:duration-500`}>
                        <img src="./Images/ad.svg" alt="logo" />
                    </div>

                    <div className={`max-h-14 lg:block absolute bottom-4 ${isHovered ? "lg:-translate-y-16" : ""} lg:transition lg:duration-500`}>
                        <h1 className="lg:text-2xl text-[1.2rem]  w-full mb-5">{heading}</h1>
                        {isHovered &&
                            <p className="lg:text-xs lg:leading-snug text-[0.75rem] leading-4 text-wrap hidden lg:block">{content}</p>}
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Card