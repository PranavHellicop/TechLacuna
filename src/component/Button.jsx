import React from 'react'

const Button = ({
    children,
    type="button",
    className = ""
}) => {
  return (
    <button type={type} className={`bg-light_dark-1 text-white lg:text-base text-sm text-center font-bold lg:py-2 lg:px-4 px-4 py-3 rounded-md text-1xl hover:bg-light_dark-2 transition-colors duration-500 ease-in-out   ${className}`}>{children}</button>
  )
}

export default Button