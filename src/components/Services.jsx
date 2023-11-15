import React from 'react'
import {LiaTractorSolid} from 'react-icons/lia'
import {TbCarCrane} from 'react-icons/tb'
import {FaHardHat} from 'react-icons/fa'
import {BiBuildingHouse} from 'react-icons/bi'

const Services = () => {
  return (
    <div>
      <div className='flex flex-col min-h-[80vh] items-center md:px-32 px-5 pt-28'>
        <h2 className='font-sans text-[#222222] text-4xl font-normal leading-tight mb-7 capitalize	'>our services</h2>
        <p className='text-[#999999] text-sm font-normal leading-6 text-center'>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan<br/> 
            ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
            <div >
        <ul className='flex flex-col md:flex-row md:px-28 gap-20 mt-20 justify-center text-center'>
            <li>
                <LiaTractorSolid className='text-[#f5af00] inline-block leading-none mb-9'size={50}/>
                <h2 className='font-sans capitalize text-lg text-[#333333] font-normal mb-3.5 leading-none'>fast operations</h2>
                <p className='text-sm font-normal leading-6 text-[#999999] mb-0'>Cobuild impresses you with fully responsiveness and highly customization.</p>
            </li>
            <li>
                <TbCarCrane className='text-[#f5af00] inline-block leading-none mb-9'size={50}/>
                <h2 className='font-sans capitalize text-lg text-[#333333] font-normal mb-3.5 leading-none'>renovation</h2>
                <p className='text-sm font-normal leading-6 text-[#999999] mb-0'>Cobuild impresses you with fully responsiveness and highly customization.</p>
            </li>
            <li>
                <FaHardHat className='text-[#f5af00] inline-block leading-none mb-9'size={50}/>
                <h2 className='font-sans capitalize text-lg text-[#333333] font-normal mb-3.5 leading-none'>consultation</h2>
                <p className='text-sm font-normal leading-6 text-[#999999] mb-0'>Cobuild impresses you with fully responsiveness and highly customization.</p>
            </li>
            <li>
                <BiBuildingHouse className='text-[#f5af00] inline-block leading-none mb-9'size={50}/>
                <h2 className='font-sans capitalize text-lg text-[#333333] font-normal mb-3.5 leading-none'>architecture</h2>
                <p className='text-sm font-normal leading-6 text-[#999999] mb-0'>Cobuild impresses you with fully responsiveness and highly customization.</p>
            </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Services
