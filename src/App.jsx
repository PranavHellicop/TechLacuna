import './App.css'
import { Route, Routes } from "react-router-dom"
import { About, Contact, Header, Footer, Home, Services } from "./component"
import Layout from './component/Layout'
import { ScrollToTop } from './component/ScrollToTop'
import PrivacyPolicy from './component/Privacy/PrivacyPolicy'
import Terms from './component/Terms/terms'


function App() {

  return (
    // <Layout>
    <>
      <ScrollToTop />
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/privacy' element={<PrivacyPolicy />} />
      <Route path='/terms' element={<Terms />} />
    </Routes>
      <Footer />

      </>
    // </Layout>
  )
}

export default App
