import React from 'react'
import Title from '../Title'
import image1 from '../../assets/gallery-1.png'
import image2 from '../../assets/gallery-2.png'
import image3 from '../../assets/gallery-3.png'
import image4 from '../../assets/gallery-4.png'
import Photo from './Photo'
import arrow from '../../assets/white-arrow.png'
const Testimonial = () => {
  return (
    <div className="testimonials mt-[10vh]">
        <Title heading={"Gallery"} subheading={"Campus Photos"}/>
        
        <div className="gallery flex justify-center items-center gap-[2vw] mt-[10vh] sm:items-start sm:flex-wrap">
            {[image1,image2,image3,image4].map((el,idx)=>{
                return <Photo el={el} idx={idx} key={idx}/>
            })}
        </div>
        <button className='bg-[#212EA0] rounded-full flex items-center px-[1vw] py-[1.5vh] gap-[1vh] mx-auto mt-[7vh] text-[1.1vw] sm:text-[4vw] sm:px-[3vw] sm:py-[1vh] cursor-pointer '>See more here <img src={arrow} alt="" className='w-[2vw] h-[2vh] sm:w-[7vw] sm:h-[1.5vh]'/></button>

    </div>
  )
}

export default Testimonial