import React from 'react'
import {HiOutlineHome} from 'react-icons/hi2'
import {TfiMobile} from 'react-icons/tfi'
import { TfiEmail } from 'react-icons/tfi'

const Map = () => {
  return (
    <div className='w-full h-full flex flex-col pb-24'>
      <div>
        <ul className='flex flex-col md:flex-row md:px-28 gap-48 mt-20 justify-evenly text-center'>
            <li>
            <HiOutlineHome className='text-[#f5af00] mb-8 inline-block leading-none'size={55}/>
            <h2 className='text-lg text-[#333333] capitalize font-normal font-sans mb-4 leading-none'>address</h2>
            <p className='text-[#999999] text-sm font-normal leading-6'>220 Petersham town, Wardell<br/>
               street, Australia PA 6550.</p>
            </li>
            <li>
            <TfiMobile className='text-[#f5af00] mb-8 inline-block leading-none'size={55}/>
            <h2 className='text-lg text-[#333333] capitalize font-normal font-sans mb-4 leading-none'>phone</h2>
            <p className='text-[#999999] text-sm font-normal leading-6'>Phone: (04) 491 570 110<br/>
               Fax: +04 642 021 332</p>
            </li>
            <li>
            <TfiEmail className='text-[#f5af00] mb-8 inline-block leading-none'size={55}/>
            <h2 className='text-lg text-[#333333] capitalize font-normal font-sans mb-4 leading-none'>email</h2>
            <p className='text-[#999999] text-sm font-normal leading-6'>support@zytheme.com<br/>
               Twitter: @zytheme</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Map
