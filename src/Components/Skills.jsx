import React from 'react'
import { skillsArr } from '../../public/data'
import Skill from './Skill'
import { motion} from 'framer-motion';
import fadeIn, { fadeWithNoSize } from './Animation';

const Skills = () => {
  return (
    <>
    <section id='skill' className='scroll-mt-28'>
      <motion.div className='text-center mt-25'  variants={fadeIn("down")} initial="hidden" whileInView={"show"}>
        <p className='text-xl font-Ovo'>What I offer</p>
            <h3 className='text-5xl mt-3 font-Ovo'>My Skills</h3>
      </motion.div>
        
        <div className='flex grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-20 gap-15 md:gap-30 place-items-center mx-8'>
           {skillsArr.map((skill , index)=>{
            return(
              <Skill  skill={skill} key={index}/>
            )
           }) }
        </div>
    </section>
    </>
  )
}

export default Skills
