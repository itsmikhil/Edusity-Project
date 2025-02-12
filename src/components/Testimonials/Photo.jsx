import React from 'react'

const Photo = ({el,idx}) => {
  return (
    <div className="photo relative w-[17vw] h-[45vh] sm:inline-block sm:w-[40vw] sm:h-[20vh] sm:rounded-[2vw] overflow-hidden">
        <img src={el} alt="" key={idx} className='w-full h-full rounded-[1vw]'/>

    </div>
  )
}

export default Photo