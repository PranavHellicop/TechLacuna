import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for routing
import Spinner from './Spinner';

const SuccessPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/contact'); // Redirect to the contact page after 3 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen  w-fit mx-auto bg-light_dark-0 p-5 flex flex-col justify-evenly items-center">
      <div className=" p-8 rounded shadow-shadow1 max-w-fit flex flex-col justify-center items-center">
        <h2 className="text-4xl mb-4 text-whatsapp_green-0">Form Submitted Successfully!</h2>
        <p className="text-white_new-0">Thank you for contacting us. We'll get back to you soon.</p>
        <p className="text-white_new-0">Redirecting you back to the contact page...</p>
      </div>
        <Spinner />
    </div>
  );
};

export default SuccessPage;
