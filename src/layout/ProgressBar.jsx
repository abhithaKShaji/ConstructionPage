import React from 'react'

const ProgressBar = (props) => {
    const progressWidth = {width:props.width}
  return (
    <div>
      
     <div className="flex justify-between mb-5">
      <span className="text-xs font-bold font-sans text-[#333] uppercase tracking-widest">{props.title}</span>
      <span className="text-xs font-bold font-sans text-[#333] uppercase ">{props.percentage}</span>
    </div>
    <div className="w-full bg-[#999] rounded-full h-1.5 mb-9">
    <div className="bg-[#f5af00] h-1.5 rounded-full" style={progressWidth}></div>
    </div>

    </div>
  )
}

export default ProgressBar

