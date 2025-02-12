import React from 'react'
import hero from '../../assets/hero.png'
import Overlay from './Overlay'
import next from '../../assets/dark-arrow.png'

const LandingPage = () => {
  return (
    <div className="landing-page relative w-full h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center gap-[2vh] " style={{backgroundImage : `url(${hero})`}}>
        <Overlay/>
        <h1 className='z-[2] w-[50%] text-[4vw] font-semibold leading-[5vw] sm:w-[75%] sm:text-[7.5vw] sm:leading-[9vw]'>We Ensure better education for a better world</h1>
        <p className='z-[2] w-[45%] sm:w-[95%]'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='z-[2] flex justify-center items-center bg-white rounded-full px-[1.5vw] py-[1.5vh] text-[#201439]  gap-[1vw] text-[1.05vw] sm:text-[4vw] sm:px-[3.5vw] sm:py-[1.5vh]  cursor-pointer'>Explore More <img src={next} className=' w-[1.25vw] h-[1.25vh] sm:w-[6.25vw] sm:h-[2vh]' /> </button>
    </div>
  )
}

export default LandingPage