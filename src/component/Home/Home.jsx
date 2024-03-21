import React, { useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'
import { useDispatch } from 'react-redux'
import { updateHome } from '../../redux-store/aboutSlice'
import { Card, Container, PostCard } from "../index"
import { featureItems, serviceItems } from '../data/data'
import Testimonial from './testimonials/Testimonial'


const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateHome())
  }, [])

  return (
    // <Container>
      <div className='  border-t-light_dark-0 border-b-light_dark-0 m-2 mt-0 mb-0 pb-10'>
        <div className='p-5 pt-0 mt-5'>
          <HeroSection />
        </div>

        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-light_dark-1 to-transparent "></div>

        <div className=' flex flex-col lg:space-y-20 space-y-16 lg:mt-10 mt-16 mb-20 pb-10 '>
    
          <h1 className='lg:text-6xl text-5xl  mx-auto w-full text-center lg:mb-0 lg:p-0 font-josefin  '>What We Do</h1>

     
          <div className='flex flex-col space-y-20 '>
            {serviceItems.map((item) => (
              <PostCard {...item} key={item.heading} />
            ))}
          </div>
        </div>

        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-light_dark-1 to-transparent mb-6"></div>

        <div className='lg:p-10 p-0  lg:mt-10 mt-10 lg:mb-20  pb-10'>
          <h1 className='lg:text-6xl text-5xl  text-center mb-5 lg:mb-10 lg:p-0 p-2 font-josefin'>Why Choose Us</h1>
          <div className='flex justify-center items-center flex-wrap lg:space-x-5  mx-auto '>
            {
              featureItems.map((item) => (
                <div key={item.id} className='bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-10 lg:mb-0 p-[0.1rem] lg:p-0 lg:bg-none'>
                  <div  className=' bg-light_dark-0 lg:bg-inherit  '>
                    <Card {...item} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-light_dark-1 to-transparent mb-6"></div>

        <div className='p-5 shadow-black lg:mb-14 lg:mt-10 pb-10'>
          <h1 className='lg:text-6xl text-5xl  text-center mb-5 lg:mb-0 lg:p-0 p-2 font-josefin '>Our Partners in Success</h1>
          <Testimonial />
        </div>
      </div>
    // </Container>
  )
}

export default Home