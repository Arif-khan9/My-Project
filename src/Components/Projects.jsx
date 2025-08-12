import React from 'react'
import { motion} from 'framer-motion';
import fadeIn, { fadeWithNoSize } from './Animation';
const Projects = (props) => {
    const{gray,fornted,takki, conversasational,techstack}= props.Project
  return (
    <motion.div  className='border border-gray-400  rounded-lg hover:shadow-2xl px-5 hover:bg-pink-100  ' variants={fadeIn("right")} initial="hidden" whileInView={"show"}>
        <p className='text-xs text-gray-600 mt-12'>{gray} | {fornted}</p>
          <p>{conversasational}</p>
          <p className='text-xs text-gray-600'>{takki}</p>
           <p className='text-lg mt-6 font-semibold mb-10'>{techstack}</p>
    </motion.div>
    
  )
}

export default Projects
