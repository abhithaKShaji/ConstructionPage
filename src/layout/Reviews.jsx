import React from 'react'

const Reviews = (props) => {
  return (
    <div className='w-full md:w-2/4 md:px-20'>
      <div className=' w-20 h-20 float-left pr-5 overflow-hidden'>
        <img className='rounded-full' src={props.img} alt="img" />
      </div>
      <span><p className='text-xl leading-9 text-[#999999] italic mb-7'>{props.des}</p>
        <h2 className='text-sm font-bold font-sans leading-none pl-20'>Gene Stevens</h2></span>
    </div>
  )
}

export default Reviews
