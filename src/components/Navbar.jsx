import React, { useState } from 'react'
import { Link } from 'react-scroll'
import img from '../assets/logoL.png'
import {LuMenuSquare} from 'react-icons/lu'

const Navbar = () => {
    const [menu,setMenu] = useState(false)
    const handleMenu = () =>{
        setMenu(!menu)
    }
  return (
    <div>
      <div className='flex flex-row absolute w-full justify-between p-5 px-5 md:px-32 z-20'>
        <div>
            <Link to='/' className='p-1 cursor-pointer'>
              <img className='z-20 relative' src={img} alt="img"/>
            </Link>
        </div>
        <nav className='hidden md:flex gap-8 pt-8 font-sans text-[#ffffff] text-xs font-normal leading-normal uppercase tracking-wider z-10'>
            <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-[#f5af00] transition-all cursor-pointer'>
                Home
            </Link>
            <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-[#f5af00] transition-all cursor-pointer'>
                Services
            </Link>
            <Link to='work' spy={true} smooth={true} duration={500} className='hover:text-[#f5af00] transition-all cursor-pointer'>
                Work
            </Link>
            <Link to='skills' spy={true} smooth={true} duration={500} className='hover:text-[#f5af00] transition-all cursor-pointer'>
                Skills
            </Link>
            <Link to='testimonials' spy={true} smooth={true} duration={500} className='hover:text-[#f5af00] transition-all cursor-pointer'>
                Testimonials
            </Link>
            <Link to='map' spy={true} smooth={true} duration={500} className='hover:text-[#f5af00] transition-all cursor-pointer'>
                Map
            </Link>
        </nav>
        <div className='flex md:hidden' onClick={handleMenu}>
            <div className='p-8 text-[#f5af00] z-20 cursor-pointer'>
              <LuMenuSquare size={40}/>
            </div>
        </div>
      </div>
      <div className={` ${
          menu ? "translate-x-0 z-10" : "-translate-x-full"
        } md:hidden flex flex-col absolute leading-9 uppercase bg-[#333] text-[#ffffff] font-sans left-0 top-28 font-normal 
        text-xs text-center pt-8 pb-4 gap-8 w-full h-1/2 transition-transform duration-300 z-10`}>
          <Link to="home" spy={true} smooth={true} duration={500} className='transition-all cursor-pointer'>
            Home
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} className='transition-all cursor-pointer'>
            Services
          </Link>
          <Link to="work" spy={true} smooth={true} duration={500} className='transition-all cursor-pointer'>
            Work
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={500} className='transition-all cursor-pointer'>
            Skills
          </Link>
          <Link to="testimonials" spy={true} smooth={true} duration={500} className='transition-all cursor-pointer'>
            Testimonials
          </Link>
          <Link to="map" spy={true} smooth={true} duration={500} className='transition-all cursor-pointer'>
            Map
          </Link>
      </div>
    </div>
  )
}

export default Navbar
