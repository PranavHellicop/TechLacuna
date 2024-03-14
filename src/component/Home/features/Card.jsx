import React from 'react'
import { useState } from 'react';

const Card = ({heading, content, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    const manageHoverIn = () => {
        setIsHovered(true)
    }
    const manageHoverOut = () => {
        setIsHovered(false)
    }

    return (
        <div>
            {/* For smaller devices */}
            <div className={`lg:hidden flex flex-col card items-center p-2 h-64 justify-center bg-[url(${image})] bg-cover bg-center `} style={{"backgroundImage": `url(${image})`}}  >
                    <h1 className=" text-[1.4rem] text-center text-pink-400 font-semibold backdrop-brightness-105  mb-5">{heading}</h1>
                    <p className="text-[0.9rem] leading-6 text-white backdrop-brightness-110 text-wrap">{content}</p>
            </div>

            {/* For larger devices */}
            <div className='max-h-fit hidden lg:block overflow-hidden w-fit pt-12 mx-auto'>
                <div className={`w-96 h-64 relative
            box bg-transparent p-2`}
                    onMouseEnter={manageHoverIn}
                    onMouseLeave={manageHoverOut}>
                    <div className={`w-2/5 lg:absolute bottom-1/3  ${isHovered ? "lg:translate-x-full lg:-translate-y-full lg:scale-125 " : ""}  lg:transition-transform lg:duration-500`}>
                        <img src={image} alt="logo" className='lg:rounded-2xl' />
                    </div>

                    <div className={`max-h-14 lg:block absolute bottom-4 ${isHovered ? "lg:-translate-y-16" : ""} lg:transition lg:duration-500`}>
                        <h1 className="lg:text-2xl font-bold  w-full mb-2">{heading}</h1>
                        {isHovered &&
                            <p className="lg:text-[0.75rem]  text-wrap hidden lg:block">{content}</p>}
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Card