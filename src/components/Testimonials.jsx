import React from 'react'
import Reviews from '../layout/Reviews'
import pic1 from '../assets/img1.jpg'
import pic2 from '../assets/img2.jpg'

const Testimonials = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col  items-center md:px-32 pt-28'>
        <h2 className='font-sans text-[#222222] text-4xl font-normal leading-tight mb-7 capitalize'>Our Clients Say</h2>
        <p className='text-[#999999] text-base font-normal leading-7 text-center'>Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat<br/> 
        pariature occaecat cupidatat proident culpa.</p>
      </div>
      <div className='flex flex-col md:flex-row float-left md:mx-32 pt-20'>
            <Reviews img={pic1} des="“It’s just brilliant. I will recommend Cobuild to everyone I know! 
            I’m really glad to these guys got Cobuild out there.”"/>
            <Reviews img={pic2} des="“We are so excited to launch our new company, By using Cobuild, 
            I think you are all about to make me happy.”"/>
        </div>
    </div>
  )
}

export default Testimonials
