import React from 'react'


const WorkImages = (props) => {

  return (
    
    <div className='group'>
      <div className='max-w-full h-auto block relative transition-all overflow-hidden'>
      <img className='group-hover:scale-110 transition duration-500 cursor-pointer' src={props.img} alt="img"/>
      <div className='absolute top-0 left-0 justify-center items-center w-full h-full py-12 px-10 
       bg-[#f5af00] backdrop-filter brightness-105 opacity-0 group-hover:opacity-95 transition-all ease-in duration-300'>
       
       <h2 className='text-white font-sans text-sm text-center mt-20'>
        {props.title}
       </h2>
  </div>
    </div>
    
    </div>
  )
}

export default WorkImages

