import React, { useState } from 'react'
import { CgPassword } from 'react-icons/cg';
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [input , setInput] = useState({
    text: "",
    Password:  "",
    message: "",
  })

  const inputsubmitbtn = (e) =>{
    const {name , value} =e.target;
    setInput((prev)=>{
      return({...prev, [name]: value})
      
    })
    
  }

   const handlesumitbtn = (e) =>{
      e.preventDefault();
      setInput({
     text: "",
     Password:  "",
     message: "",
      })
      console.log(input);
      
   }

  return (
    <>
    <div id='contect' className='mt-25 text-center scroll-mt-28'>
      <p className=''>Connect with me</p>
      <h3 className='text-5xl mt-2 font-Ovo'>Get in touch</h3>
      <p className='mt-5 text-xs px-2.5 md:text-xl'>I'd love to hear from you! If you have any questions, comments, or feedback, please use the form <br /> below.</p>
    </div>
    <div className='flex flex-col items-center mt-10 gap-5'>
     <form className='flex flex-col items-center mt-10 gap-5' onSubmit={handlesumitbtn}>
      <div className='flex-col flex md:flex md:flex-row gap-5'>
       <input className='border p-3 w-84 md:w-88  lg:w-90 rounded-md border-gray-400 placeholder:text-gray-300' type="text"  name='text'  placeholder='Enter your name' value={input.text } onChange={inputsubmitbtn}/>
      <input className='border  p-3 w-84 md:w-88 Lg:w-90 rounded-md border-gray-400 placeholder:text-gray-300' type="email" name='Password' placeholder='Enter your email' value={input.Password } onChange={inputsubmitbtn}/>
     </div>
     <div>
      <textarea  className='border border-gray-400 p-3 h-90  w-85 md:w-167 lg:w-185 rounded-md placeholder:text-gray-300'  name='message' id=""  placeholder='Enter your messag' value={input.message} onChange={inputsubmitbtn}> </textarea> 
     </div>
     <button className='py-3 px-8 rounded-full border bg-black text-white flex items-center gap-3'>Submit <IoIosArrowRoundForward  className='h-7 w-7'/></button>
     </form>
     <div className='mt-20'>
      <p className='flex items-center gap-3.5 text-xs md:text-xl text-gray-400'><MdEmail  className='w-8 h-8 '/>ak4040651@gmail.com</p>
     </div>
      <div className='border-b w-80 md:w-150 lg:w-250 border-gray-400 mt-5 mb-10'></div>
     <div className='flex gap-6 mb-5'>
       <a href="https://github.com/Arif-khan9"  target="_blank"> <img className='bg-black rounded-full w-10 h-10' src="github.webp" alt="" /></a>
       <a href=""> <img  className='h-10 w-10' src="linkedin.webp" alt="" /></a>
      </div>
    </div>
    </>
  )
}

export default Contact
