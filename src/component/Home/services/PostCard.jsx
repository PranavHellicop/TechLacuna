import React from 'react'

const PostCard = ({heading,content,reverse}) => {
  return (
    <div className={` flex flex-col ${reverse? "lg:flex-row-reverse":"lg:flex-row"} justify-center items-center p-1 py-0`} >
      <div className='lg:h-80 h-52 w-52 lg:w-96 p-2 rounded-full'>
        <img src="../../Images/social-media-ads.webp" className='rounded-full h-full' alt="image" />
      </div>
      
      <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[0.15rem] w-5/6 rounded-xl'>
      <div className=' flex flex-col justify-center items-center rounded-xl  space-y-5 p-3 bg-light_dark-2'>
        <h1 className='lg:text-4xl text-2xl font-josefin  text-center'>{heading}</h1>
        <p className='lg:text-base text-sm text-center '>{content}</p>
      </div>
      </div>
    </div>
  )
}

export default PostCard