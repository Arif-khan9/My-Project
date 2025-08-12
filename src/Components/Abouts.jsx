import React from 'react'
import { motion} from 'framer-motion';
import fadeIn, { fadeWithNoSize } from './Animation';

const Abouts = (props) => {
    const {color,MAK,Began} = props.career
  return (
    <motion.div  className='md:ml-10 ml-4 ' variants={fadeIn("right")} initial="hidden" whileInView={"show"}>
          <h2 className='flex gap-4  text-xl md:text-2xl  items-center '> <div className='h-4 w-4  rounded-full' style={{backgroundColor: color}}></div>{ MAK}</h2>
        <p className='ml-8  text-xs md:text-xl'>{Began}</p>
    </motion.div>
   
  )
}

export default Abouts
