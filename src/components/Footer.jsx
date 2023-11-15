import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between text-[#999999] border border-t-[#e5e5e5] pt-7'>
        <div className='mt-4 md:mt-0 pb-7 md:px-28'>
            <p className='text-sm font-normal leading-5'>© AKS 2023, All Rights Reserved.</p>
        </div>
        <div>
            <ul className='flex flex-row md:flex-row md:px-28 gap-5 '>
                <li>
                <FaFacebookF className='hover:text-[#f5af00]' size={14}/>
                </li>
                <li>
                <FaXTwitter className='hover:text-[#f5af00]' size={14}/>
                </li>
                <li>
                <FaDribbble className='hover:text-[#f5af00]' size={14}/>
                </li>
                <li>
                <FaInstagram className='hover:text-[#f5af00]' size={14}/>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
