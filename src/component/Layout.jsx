import React from 'react'
import { useLocation} from 'react-router-dom'
import {Header,Footer} from "./index"

const Layout = ({children}) => {

  const {pathname} = useLocation()
  console.log(pathname);
  return (
    <div>
        {!(pathname==="/signup"||pathname==="/login") && <Header /> } 
        {children}
        {!(pathname==="/signup"||pathname==="/login") && <Footer /> } 

    </div>
  )
}

export default Layout