import React, { useState } from 'react'
import towerImg from '../assets/1.jpg'
import renovationImg from '../assets/2.jpg'
import hospitalImg from '../assets/3.jpg'
import tower2Img from '../assets/4.jpg'
import renovation2Img from '../assets/5.jpg'
import planningImg from '../assets/6.jpg'
import WorkImages from '../layout/workImages'



const Work = () => {
  const [selectedCategory,setSelectedCategory] = useState('All');

  const images = [
    {img:towerImg, title:'Tower Building', category:'Building'},
    {img:renovationImg, title:'Renovation', category:'Construction'},
    {img:hospitalImg, title:'Hospital Building', category:'Planning'},
    {img:tower2Img, title:'Tower Building', category:'Building'},
    {img:renovation2Img, title:'Tower Renovation', category:'Construction'},
    {img:planningImg, title:'Planning', category:'Planning'}
  ];

  const filteredImages = selectedCategory === 'All' ? images : images.filter(image => image.category === selectedCategory)

  return (
    <div className='w-full h-full bg-gray-100'>
      <div className='flex flex-col min-h-screen items-center md:px-32 px-5 my-10 pt-28'>
        <h2 className='font-sans text-[#222222] text-4xl font-normal leading-tight mb-7 capitalize'>featured work</h2>
        <p className='text-[#999999] text-base font-normal leading-7 text-center'>Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat<br/> 
        pariature occaecat cupidatat proident culpa.</p>

        <div>
            <ul className='flex flex-row md:flex-row capitalize text-base text-[#999999] italic pr-6 mr-4 gap-6 pt-20 cursor-pointer'>
            <li className={`hover:text-[#f5af00] ${selectedCategory === 'All' && 'text-[#f5af00]'}`} onClick={() => setSelectedCategory('All')}>all</li><span>/</span>
            <li className={`hover:text-[#f5af00] ${selectedCategory === 'Building' && 'text-[#f5af00]'}`} onClick={() => setSelectedCategory('Building')}>building</li><span>/</span>
            <li className={`hover:text-[#f5af00] ${selectedCategory === 'Construction' && 'text-[#f5af00]'}`} onClick={() => setSelectedCategory('Construction')}>construction</li><span>/</span>
            <li className={`hover:text-[#f5af00] ${selectedCategory === 'Planning' && 'text-[#f5af00]'}`} onClick={() => setSelectedCategory('Planning')}>planning</li>
            </ul>
        </div>

        <div className='flex flex-wrap justify-center gap-6 mt-6 mb-10'>
          {filteredImages.map((image, index)=> (
            <WorkImages key={index} img={image.img} title={image.title} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Work
