import React from 'react'
import Title from '../Title'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const Contact = () => {
  return (
    <>
    <Title heading={"Contact Us"} subheading={"Get in touch"}/>
    <div className="contact mt-[5vh] flex justify-between text-black px-[15vw] sm:flex-col sm:items-center sm:px-[10vw] sm:gap-[5vw]">
        <ContactLeft/>
        <ContactRight/>
    </div>
    </>
  )
}

export default Contact