import React from 'react'
import {careerArr} from '../../public/data'
import Abouts from './Abouts'
import { motion} from 'framer-motion';
import fadeIn, { fadeWithNoSize } from './Animation';

const About = () => {
  return (
   <>
   <section>
   <div id='about' className='flex flex-col justify-center items-center gap-5 mt-30 scroll-mt-28'>
     <div>
        <motion.p className='text-center text-xl' variants={fadeIn("down")} initial="hidden" whileInView={"show"}>Introduction</motion.p>
        <motion.h1 className='text-5xl font-Ovo'  variants={fadeIn("down")} initial="hidden" whileInView={"show"}>About Me</motion.h1>
    
    </div>
    <div className='flex text-center flex-col gap-20 md:flex-row   md:text-center  mt-10   md:gap-40 lg:gap-65 '>
        <motion.div variants={fadeWithNoSize(0)} initial="hidden" whileInView={"show"}>
            <h1 className='text-5xl font-bold text-blue-600'>1</h1>
            <p>Years of Experience</p>
        </motion.div>
         <motion.div variants={fadeWithNoSize(0)} initial="hidden" whileInView={"show"}>
            <h1 className='text-5xl font-bold text-green-600'>30+</h1>
            <p>Years of Experience</p>
        </motion.div>
         <motion.div variants={fadeWithNoSize(0)} initial="hidden" whileInView={"show"}>
            <h1 className='text-5xl font-bold text-purple-600'>10+</h1>
            <p>Skills Mastered</p>
        </motion.div>
        
    </div>
   </div>
   <section>
   <motion.p className='text-center text-3xl mt-25' variants={fadeIn("right")} initial="hidden" whileInView={"show"}>Career Highlights</motion.p>
   <div className='md:ml-6 lg:ml-30 ml-5  mt-20  px-5'>
     <div className=' border-l-2 border-gray-400 flex flex-col gap-9'>
        {careerArr.map((career , index) =>{
            return(
               <Abouts  career={career} key={index}/>
            )
        })}
    </div>
   </div>
   <section>
   <div className='flex justify-center mt-25 px-10 '>
     <div className=' bg-gray-100 px-7   md:px-40 lg:px-88 py-12 md:py-6'>
        <p className='italic text-gray-700 text-xs md:text-xl'>"Code is like humor. When you have to explain it, it’s bad."</p>
        <p className='text-center text-xs md:text-xl mt-5 text-gray-500'>— My Approach to Development</p>
    </div>
   </div>
   </section>
   </section>
   </section>
   </>
  )
}

export default About
