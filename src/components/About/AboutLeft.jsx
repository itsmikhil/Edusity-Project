import React from 'react'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'

const AboutLeft = ({player,setplayer}) => {
  let handleClick=()=>{
    setplayer(true);
  }
  return (
    <div className="about-left relative w-[40%] h-[60vh] rounded-[1vw] overflow-hidden flex justify-center items-center sm:w-[90%] sm:mx-auto sm:h-[30vh] sm:rounded-[2vw]">
          <img src={about} alt="" className='h-[100%] w-[100%]'/>  
          <img src={play} alt="" className='absolute h-[9vh] w-[4vw] cursor-pointer sm:w-[11vw] sm:h-[6vh]' onClick={handleClick} />
    </div>
  )
}

export default AboutLeft