import React from 'react'
import { motion} from 'framer-motion';
import fadeIn, { fadeWithNoSize } from './Animation';


const Skill = (props) => {
   const {name, src} = props.skill
    
  return (
   <motion.div className='flex flex-col items-center gap-4  text-xl md:text-2x' variants={fadeIn("down")} initial="hidden" whileInView={"show"}>
      <img className="  h-[50px] w-[50px] lg:h-[100px]  lg:w-[100px] object-contain "  src={src} width="50px" height="50px" alt="img" /> 
      <p>{name}</p>
   </motion.div>
     
  )
}

export default Skill
