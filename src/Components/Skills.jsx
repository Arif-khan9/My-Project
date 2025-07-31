import React from 'react'
import { skillsArr } from '../../public/data'
import Skill from './Skill'

const Skills = () => {
  return (
    <>
    <section id='skill' className='scroll-mt-28'>
        <div className='text-center mt-25'>
            <p className='text-xl font-Ovo'>What I offer</p>
            <h3 className='text-5xl mt-3 font-Ovo'>My Skills</h3>
        </div>
        <div className='flex grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-20 gap-15 md:gap-30 place-items-center mx-20'>
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
