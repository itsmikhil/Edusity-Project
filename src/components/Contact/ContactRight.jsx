import React from 'react'
import arrow from '../../assets/white-arrow.png'

const ContactRight = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "83ee8ce9-4388-4e02-84e9-f135abb9fe4d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact-right flex flex-col w-[50%] sm:w-[100%]">
        <form onSubmit={onSubmit} className='flex flex-col gap-[0.5vh] text-gray-600'>
            <label htmlFor="name" className='mt-[1vh]'>Your name</label>
            <input type="text" id='name' name='name' required className='bg-[#EBECFE] px-[1vw] py-[1vh]' placeholder='Enter your name' />
            <label htmlFor="phone-number" className='mt-[1vh]'>Your name</label>
            <input type="text" id='phone-number'name='phone-number' required className='bg-[#EBECFE] px-[1vw] py-[1vh]' placeholder='Enter your mobile number' />
            <label htmlFor="email" className='mt-[1vh]'>Email Id</label>
            <input type="email" id='email' name='email' required className='bg-[#EBECFE] px-[1vw] py-[1vh]' placeholder='Enter your Email id' />
            <label htmlFor="message" className='mt-[1vh]'>Write your message</label>
            <textarea name="message" id="message" required placeholder='Enter your message ' className='bg-[#EBECFE] resize-none h-[20vh] px-[1vw] py-[1vh]'></textarea>
            <button className='flex bg-[#212EA0] w-fit text-[1vw] items-center gap-[0.6vw] text-white rounded-full px-[1.2vw] py-[2vh] mt-[3vh] sm:text-[4vw] sm:px-[4vw] sm:py-[1vh] cursor-pointer'>Submit Now <img src={arrow} alt="" className='w-[1vw] h-[1.5vh] sm:w-[8vw] sm:h-[2vh]'/></button>
        </form>
        <span className='text-gray-600'>{result}</span>
    </div>
  )
}

export default ContactRight