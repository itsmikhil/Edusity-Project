import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Program from './components/Program/Program'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Testimonial from './components/Testimonials/Testimonial'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'

const App = () => {
  const [player, setplayer] = useState(false);
  return (
    <>
    <div className="main relative  w-full min-h-[100vh] font-[outfit]  text-white bg-[#F5F5F5] box-border m-0 p-0">
      <NavBar/>
      <LandingPage/>
      <Program/>
      <About player={player} setplayer={setplayer}/>
      <Testimonial/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App