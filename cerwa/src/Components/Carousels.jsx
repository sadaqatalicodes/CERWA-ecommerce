import React from 'react'
import { Carousel } from 'flowbite-react';
import poster1 from "../assets/poster1.jpg"
import poster2 from "../assets/poster2.jpg"
import poster3 from "../assets/poster3.jpg"
import poster4 from "../assets/poster4.jpg"


const Carousels = () => {
  return (
    <>
     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-2xl ">
      <Carousel>
        <img className='h-56 sm:h-64 xl:h-80' src={poster1} alt="..." />
        <img className='h-56 sm:h-64 xl:h-80' src={poster2} alt="..." />
        <img className='h-56 sm:h-64 xl:h-80' src={poster3} alt="..." />
        <img className='h-56 sm:h-64 xl:h-80' src={poster4} alt="..." />
      </Carousel>
    </div>
    </>
  )
}

export default Carousels