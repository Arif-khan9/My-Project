import React from 'react'


const Skill = (props) => {
   const {name, src} = props.skill
    
  return (
     <div className='flex flex-col items-center gap-4  text-xl md:text-2xl'>
                <img className="  h-[50px] w-[50px] lg:h-[100px]  lg:w-[100px] object-contain "  src={src} width="50px" height="50px" alt="img" /> 
                <p>{name}</p>
            </div>
  )
}

export default Skill
