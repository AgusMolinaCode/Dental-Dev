import React from 'react'
import { InfiniteSlider } from '../UI/InfiniteSlider'

const Slider = () => {
  return (
    <div className='py-10'>
      <div className='max-w-[1100px] px-2 my-8 flex justify-center mx-auto'>
        <h1 className='text-black text-2xl md:text-3xl font-medium text-center'>Cuidar de su <span className='text-deep-orange-300'>salud</span> nunca fue tan sencillo. Consulte con nuestros <span className='text-deep-orange-300'>médicos</span> altamente capacitados mediante <span className='text-deep-orange-300'>citas</span> cómodas y accesibles.</h1>
      </div>
      <div className='py-14'>
        <InfiniteSlider />
      </div>
    </div>
  )
}

export default Slider