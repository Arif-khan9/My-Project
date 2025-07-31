import React from 'react'

const Projects = (props) => {
    const{gray,fornted,takki, conversasational,techstack}= props.Project
  return (
    <div  className='border border-gray-400  rounded-lg hover:shadow-2xl px-10 hover:bg-pink-100  '>
          <p className='text-xs text-gray-600 mt-12'>{gray} | {fornted}</p>
          <p>{conversasational}</p>
          <p className='text-xs text-gray-600'>{takki}</p>
           <p className='text-lg mt-6 font-semibold mb-10'>{techstack}</p>
        </div>
  )
}

export default Projects
