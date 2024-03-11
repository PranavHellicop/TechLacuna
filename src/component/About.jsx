import React, { useEffect } from 'react'



const About = () => {

  return (
    <div className='lg:m-4 m-0 lg:mt-0 mb-4 about overflow-hidden flex flex-col justify-center items-center space-y-16'>
      {/* <svg id="visual" viewBox="0 0 900 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#2d283e"></rect><path d="M0 141L50 151.2C100 161.3 200 181.7 300 167C400 152.3 500 102.7 600 87.2C700 71.7 800 90.3 850 99.7L900 109L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" fill="#802bb1" stroke-linecap="round" stroke-linejoin="miter"></path></svg> */}
      {/* <div className='w-8/12 bg-light_dark-2 p-5 shadow-shadow1 rounded-3xl flex flex-col justify-center items-center mt-10 '> */}


      <div className='lg:w-96 lg:h-96 w-80 h-80 '>
        <img src="./Images/about_img.svg" alt="image" className='rounded-full' />
      </div>
      <div className=' lg:w-9/12 w-full flex flex-col justify-center items-center '>
        <h2 className='text-center text-5xl  font-josefin mb-3'>Our Story</h2>

        <p className='text-left p-3 text-wrap text-base'>At TechLacuna AI, our story is one of passion, dedication, and innovation. We started with a simple idea – to help businesses succeed in the digital world. Our founders, who had extensive experience in the tech industry, saw a need for a company that could provide high-quality digital services at an affordable price.</p>

        <p className='text-left p-3 text-wrap text-base'>
          From our humble beginnings, we have grown into a trusted provider of web development, app development, AI integration, SEO, and social media management services. Our team is made up of experts in their respective fields, who share a commitment to excellence and a passion for helping our clients achieve their goals.
        </p>
        <p className='text-left  p-3 text-wrap text-base'>
          Over the years, we have worked with businesses of all sizes, from startups to established enterprises. We pride ourselves on our ability to listen to our clients’ needs and develop tailored solutions that meet their unique requirements. Our focus on building strong relationships with our clients has earned us a reputation for exceptional customer service and support.
        </p>
        <p className='text-left p-3 text-wrap text-base'>

          As the digital landscape continues to evolve, we remain committed to staying ahead of the curve and providing cutting-edge solutions to our clients. At TechLacuna AI, we are driven by our passion for technology and our desire to help businesses succeed.</p>

        {/* </div> */}
      </div>

      <div className='lg:flex flex-col items-center justify-center p-3 '>
        <div className='w-96 '>
          <img src="./Images/mission.svg" alt="image" />
        </div>
        <div className='lg:w-2/3 w-full flex flex-col justify-center items-center '>
          <h2 className='text-center text-5xl font-josefin mb-3'>Our Mission</h2>

          <p className='text-left  p-3 text-wrap'>At TechLacuna AI, our mission is to empower businesses with the tools and technologies they need to succeed in the digital world. We believe that every business, regardless of size or industry, deserves access to high-quality digital services that can help them achieve their goals.</p>

          <p className='text-left  p-3 text-wrap'>

            Our team is dedicated to providing personalized solutions that meet the unique needs of each of our clients. We strive to be a trusted partner, offering expert guidance and support every step of the way.
          </p>

          <p className='text-left  p-3 text-wrap'>


            Through our commitment to excellence and innovation, we aim to help businesses grow and thrive in today’s fast-paced digital environment. Our mission is to be the go-to provider of digital services for businesses across industries, providing them with the resources they need to achieve their full potential.</p>
       
      </div>
    </div>

    </div >
  )
}

export default About