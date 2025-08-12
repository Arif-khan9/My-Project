import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiArrowDownTray } from "react-icons/hi2";
import { motion} from 'framer-motion';
import fadeIn from './Animation';

const Section = () => {
  return (
   <>
    <section id='section' className='scroll-mt-28'>
        <div className='flex flex-col justify-center items-center gap-7 mt-40'>
            <motion.h1 className='text-[66px] font-bold' variants={fadeIn("down")} initial="hidden" whileInView={"show"}>Arif </motion.h1>
            <motion.h3 className='text-2xl' variants={fadeIn("down")} initial="hidden" whileInView={"show"}>Frontend Engineer</motion.h3>
            <motion.p className='text-center text-[15px]  font-Ovo px-4  md:text-xl' variants={fadeIn("up")} initial="hidden" whileInView={"show"}>I’m Frontend Engineer with almost 1 years of experience, specialising in React, Next.Js, <br /> Javascript and other Web technologies.</motion.p>
            <div className=' md:flex flex flex-col gap-4 md:flex-row  md:gap-3 mt-6 '>
            <motion.a href="#contect" variants={fadeIn("up")} initial="hidden" whileInView={"show"}><button  className='flex items-center border px-7 py-3 sm:gap-2 md:gap-3.5 rounded-full bg-black text-white'>Contact me <span><IoIosArrowRoundForward  className='h-8 w-8'/></span></button></motion.a>
            <motion.a download href="../../last.pdf" variants={fadeIn("up")} initial="hidden" whileInView={"show"}><button  className=' flex border px-10 py-3.5 gap-3.5 rounded-full'>Resume <span><HiArrowDownTray className='h-5 w-5' /></span></button></motion.a >
        </div>
        </div>
       
    </section>
   </>
  )
}

export default Section
