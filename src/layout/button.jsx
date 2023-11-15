import React from 'react'

const button = (props) => {
  return (
    <div>
      <button className='bg-[#f5af00] text-white py-2 px-5 rounded-full mt-4 font-sans text-xs uppercase font-medium w-40 h-12 
      hover:bg-[#333333] transition-all'>
        {props.title}
      </button>
    </div>
  )
}

export default button
  