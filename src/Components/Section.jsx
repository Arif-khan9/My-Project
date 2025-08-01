import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiArrowDownTray } from "react-icons/hi2";

const Section = () => {
  return (
   <>
    <section id='section' className='scroll-mt-28'>
        <div className='flex flex-col justify-center items-center gap-7 mt-40'>
            <h1 className='text-[66px] font-bold  '>Arif</h1>
            <h3 className='text-2xl '>Frontend Engineer</h3>
            <p className='text-center text-xs px-4  md:text-xl'>I’m Frontend Engineer with almost 2.5 years of experience, specialising in React, Next.Js, <br />
            Javascript and other Web technologies.</p>
            <div className=' md:flex flex flex-col gap-4 md:flex-row  md:gap-3 mt-6 '>
            <a href="#contect"><button  className='flex items-center border px-7 py-3 sm:gap-2 md:gap-3.5 rounded-full bg-black text-white'>Contact me <span><IoIosArrowRoundForward  className='h-8 w-8'/></span></button></a>
          <a download href="../../last.pdf"><button  className=' flex border px-10 py-3.5 gap-3.5 rounded-full'>Resume <span><HiArrowDownTray className='h-5 w-5' /></span></button></a>
        </div>
        </div>
       
    </section>
   </>
  )
}

export default Section
