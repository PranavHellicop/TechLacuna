import React from 'react'
import { serviceCardItems } from './data/data'
import {ServiceCard} from "./index"

const Services = () => {
  return (
    <div className='m-4 flex flex-col space-y-10 items-center justify-center mb-10 mt-10 p-5'>
      <div className='bg-light_dark-1 lg:w-5/6 lg:h-36 p-2 shadow-shadow3 border-4 border-black'>
        <p className='font-josefin lg:text-6xl text-3xl text-center lg:p-2 p-1'>Proven Strategies. Measurable Results. Global Expansion.</p>
      </div>
      <div className='p-3 lg:w-5/6'>
        <p className='text-center font-semibold lg:text-lg'>Whether you’re ready to expand into new markets or dominate your existing space, our comprehensive services are designed to accelerate your business success on an international scale.</p>
      </div>
      <div className='lg:flex lg:flex-row flex-col lg w-full flex-wrap p-3 justify-evenly items-center'>
        {serviceCardItems.map((item)=>(
          
        <ServiceCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Services