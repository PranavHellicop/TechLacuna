import React from 'react'


const ServiceCard = ({ id, image, bigHeading, smallHeading, content }) => {
    return (
        <div className=' flex flex-col items-center justify-between shadow-shadow4 bg-white_new-0
         text-black lg:w-1/4 w-full lg:h-[23rem] h-fit border-4 border-purple-400 lg:p-3 p-4 lg:m-3 mb-7 rounded-xl'>
            <div className='flex flex-col justify-center items-center h-2/5'>
                <div className='flex space-x-3'>
                    <img src={image} alt="" className='h-16 w-14' />
                    {id === 1 ? <img src="./Images/meta.svg" alt="logo" className='h-16 w-16' /> : ""}
                </div>
                <h1 className='lg:text-xl text-[1.5rem] font-extrabold text-center'>{bigHeading}</h1>
            </div>
            <h1 className='text-light_dark-1 lg:text-lg text-[1.2rem] text-center font-bold p-2 lg:p-0'>{smallHeading}</h1>
            <p className='text-wrap text-center  font-poppins h-2/5 p-1 lg:p-0'>{content}</p>
            {/* <div className='flex flex-col space-y-5 items-center h-1/2 '>

            </div> */}
        </div>
    )
}

export default ServiceCard