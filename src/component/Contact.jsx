import React from 'react'
import {useForm, ValidationError} from '@formspree/react'
import { useNavigate} from 'react-router-dom';


const Contact = () => {
  const [state, handleSubmit, reset] = useForm('xqkrlard');
  const navigate = useNavigate()

  if (state.succeeded) {

    return navigate("/success")
    
  }

  return (
    <div className='flex flex-col lg:flex-row m-4 lg:mt-16 mt-5 mb-16 space-y-10 lg:space-y-0 items-center lg:h-[40rem] justify-center'>
      <div className='flex flex-col lg:w-1/3 w-full lg:ml-5 '>
        <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1'>
          <img src="./Images/contact_us.jpg" alt="contact-image" className='' />
        </div>
        <div>
          <p className='mt-5 lg:text-sm p-1'>Looking for more information or have any doubts? Submit your information and we will follow up with you as soon as possible.</p>
        </div>
      </div>

      <div className='lg:w-1/2 w-full  lg:h-fit flex flex-col items-center shadow-shadow5 text-black justify-center bg-white_new-0 my-5 p-2 pt-5 space-y-10'>
        <h1 className='lg:text-3xl text-2xl font-josefin'>Get in touch with our team</h1>
        <form  onSubmit={handleSubmit} className='flex flex-col space-y-7 w-full lg:w-11/12  p-2  '>
          <div className='flex lg:flex-row flex-col justify-between lg:space-x-2 lg:space-y-0 space-y-7 '>
            <div className='flex flex-col space-y-2 lg:w-1/2'>
              <label htmlFor="firstname" className='font-josefin'>First Name <span className="red-star">★</span></label>
              <input required type="text" name="First Name" placeholder='first name' id="firstname" className='p-2 h-9' />
            </div>
            <div className='flex flex-col space-y-2 lg:w-1/2'>
              <label htmlFor="lastname" className='font-josefin'>Last Name <span className="red-star">★</span></label>
              <input required type="text" name="Last Name" placeholder='last name' id="lastname" className='h-9 p-2' />
            </div>

          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="email" className='font-josefin'>Email <span className="red-star">★</span></label>
            <input required type="email" name="Email" placeholder='email' id="email" className='p-2 h-9' />
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor="phone" className='font-josefin'>Phone Number</label>
            <input type="tel" name="Phone" placeholder='phone no.' id="phone" pattern='[0-9]{10}' className='p-2 h-9' />
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor="message" className='font-josefin'>Your Message <span className="red-star">★</span></label>
            <textarea required name="Message" placeholder='tell us about your query' cols="30" rows="4" id="message" className='p-2' />
          </div>

          <input type="submit" value="Submit" disabled={state.submitting}  className='p-2 bg-light_dark-1 w-28 rounded-md text-white font-semibold hover:bg-light_dark-2 cursor-pointer mx-auto'/>
        </form>
       
      </div>
    </div>


  )
}

export default Contact