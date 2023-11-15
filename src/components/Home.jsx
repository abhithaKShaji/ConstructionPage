import React from 'react'
import img from '../assets/home.jpg'
import { Link} from 'react-scroll'
import Button from '../layout/button'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover md:object-left' src={img} alt="img"/>
      <div className='bg-black/50 absolute left-0 top-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white'>
          <div className='m-auto relative'>
            <h2 className='font-sans text-7xl font-normal leading-tight mb-7'>We're Building Your Future</h2>
            <p className='text-lg font-normal leading-7 mb-12'>Take a step towards the future of construction with Cobuild</p>
            <Link to='/' spy={true} smooth={true} duration={500}>
             <Button title="get a quote"/>
            </Link>
           </div>
        </div>
    </div>
  )
}

export default Home
