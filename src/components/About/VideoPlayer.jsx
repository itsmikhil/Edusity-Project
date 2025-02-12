import React, { useRef } from 'react'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({player,setplayer}) => {
    let container = useRef(null);
    let handleClick2=(e)=>{
        if(e.target===container.current){
            setplayer(false);
        }
    }
  return (
    <div ref={container} onClick={handleClick2} className={`video-player fixed top-0 w-full h-[100vh] z-[999] items-center justify-center bg-[#000000c9] ${player?"":"hidden"}` }>
      <video src={video} autoPlay muted controls loop className='w-[45%] h-[60%] overflow-hidden m-auto translate-y-[30%] '></video>
    </div>
  )
}

export default VideoPlayer