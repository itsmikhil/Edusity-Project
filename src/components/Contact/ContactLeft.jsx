import React from 'react'
import msg from '../../assets/msg-icon.png'
import phone from '../../assets/phone-icon.png'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'

const ContactLeft = () => {
  return (
    <div className="contact-left text-black flex flex-col w-[40%] gap-[2vh] sm:w-[90%]">
        <h1 className='flex items-center text-[1.6vw] gap-[1vw] sm:text-[6vw]'>Send us a message <img src={msg} alt="" className='w-[2.5vw] h-[4.5vh] sm:w-[7.5vw] sm:h-[3.5vh]' /></h1>
        <p className='text-gray-600 text-[1vw] leading-[1.3vw] sm:text-[3.5vw] sm:leading-[4.5vw]'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <h1 className='flex items-center gap-[1vw] text-gray-600'><img src={mail} alt="" className='w-[2vw] h-[3vh] sm:w-[6vw] sm:h-[2vh]' />Contact@GreatStack.dev</h1>
        <h1 className='flex items-center gap-[1vw] text-gray-600'><img src={phone} alt="" className='w-[1.75vw] h-[3.25vh] sm:w-[5vw] sm:h-[2.5vh]' />+1 123-456-7890</h1>
        <h1 className='flex items-center gap-[1vw] text-gray-600 w-[70%] sm:w-[90%]'><img src={location} alt="" className='w-[2.5vw] h-[4.5vh] sm:w-[6vw] sm:h-[3vh]' />77 Massachusetts Ave, Cambridge
        MA 02139, United States</h1>
    
    </div>
  )
}

export default ContactLeft