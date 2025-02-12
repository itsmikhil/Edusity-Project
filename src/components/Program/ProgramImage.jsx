import React from 'react'


const ProgramImage = ({el,idx}) => {
  return (
    <div className="program-image relative w-[23vw] h-[50vh] rounded-[1vw] sm:w-[75vw] sm:h-[33vh] sm:rounded-[2vw] overflow-hidden cursor-pointer group " key={idx}>
        <img src={el.address} alt="" className='w-full h-full z-[11]'/>
        <div className="overlay absolute top-[70%] opacity-0 flex flex-col justify-center items-center w-full h-full rounded-[1vw] bg-[#08003a41] z-[12] group-hover:opacity-[1] group-hover:top-0 transition-all duration-[0.4s] ease-out md:hidden pointer-events-none ">
            <img src={el.icon} alt="" className='w-[4vw] h-[11vh]' />
            <p className='text-[1vw]'>{el.text}</p>
        </div>
    </div>
  )
}

export default ProgramImage