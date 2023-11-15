import React from 'react'
import ProgressBar from '../layout/ProgressBar'

const Skills = () => {
  return (
    <div>
    <div className='min-h-[50vh] flex flex-col md:flex-row md:justify-between items-start md:mx-32 mt-20'>
      <div className='md:w-2/4 text-left px-9'>
        <h2 className='font-sans text-[#222222] text-4xl font-normal leading-tight mb-7'>We are expert in this field<br/> since almost 20 years.</h2>
        <p className='text-base font-normal leading-8 mb-0 text-[#999999]'>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,<br/> lorem quis bibendum auctor, nisi elit cuat ipsum, 
            nec sagittis<br/> sem nibh id elit duis sed odio sit nibh vulputate cursus a sit<br/> amet mauris morbi accumsan.</p>
      </div>
      <div className='w-full md:w-2/4 float-left pl-9 pr-24'>
        <ProgressBar title="buildings" percentage="85%" width="85%"/>
        <ProgressBar title="architecture" percentage="60%" width="60%"/>
        <ProgressBar title="construction" percentage="70%" width="70%"/>
        <ProgressBar title="planning" percentage="40%" width="40%"/>
      </div>
    </div>
    <div className='flex flex-col md:flex-row justify-between bg-[#f5af00] md:px-32 p-16'>
        <div className='flex flex-col md:flex-row p-1 pl-7'>
            <h2 className='text-3xl font-normal leading-tight text-white font-sans text-left mt-3'>An innovative company working with the latest technologies</h2>
        </div>
        <div className='pr-20'>
        <button className='bg-[#f5af00] text-white py-2 px-5  rounded-full border border-white mt-4 font-sans text-xs uppercase font-medium w-40 h-12 
      hover:bg-[#ffffff] hover:text-[#f5af00] transition-all'>
        get a quote
      </button>
        </div>
      </div>
    </div>
    
    
  )
}

export default Skills
