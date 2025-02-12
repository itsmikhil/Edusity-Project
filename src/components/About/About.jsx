import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import VideoPlayer from './VideoPlayer'

const About = ({player,setplayer}) => {
  return (
    <>
    <div className="about flex px-[15vw] mt-[20vh] gap-[8vh] sm:flex-col-reverse sm:items-start sm:px-[3vh] ">
        <AboutLeft player={player} setplayer={setplayer}/>
        <AboutRight/>        
    </div>
    <VideoPlayer player={player} setplayer={setplayer}/>
    </>
  )
}

export default About