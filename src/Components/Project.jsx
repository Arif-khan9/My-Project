import React from 'react'
import { projectArr } from '../../public/data'
import Projects from './Projects'
import { motion} from 'framer-motion';
import fadeIn, { fadeWithNoSize } from './Animation';

const Project = () => {
  return (
    <>
    <section id='project' className='scroll-mt-28' >
      <motion.div className='text-center mt-25' variants={fadeIn("right")} initial="hidden" whileInView={"show"}>
        <p className='font-Ovo'>What I have Created</p>
         <p className='text-5xl font-Ovo  mt-2'>My Projects</p>
      </motion.div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center mt-8 px-5 md:px-15 lg:px-50'>
        {projectArr.map((project, index) =>{
          return(
          <Projects Project={project} key={index}/>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Project
