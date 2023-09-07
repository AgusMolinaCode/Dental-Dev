import React from 'react'
import SwiperProfesionales from '../UI/SwiperProfesionales'

const Profesionales = () => {
  return (
    <div>
        <div>
            <h1 className='text-2xl sm:text-4xl text-center font-medium'>Nuestros Profesionales</h1>
            <p className='text-md text-gray-500 flex justify-center mx-auto max-w-sm text-center'>&ldquo;Conoce a Nuestros Especialistas en Odontología: Profesionales Apasionados por Tu Sonrisa&rdquo;</p>
        </div>
        <div className='py-8 sm:py-20'>
            <SwiperProfesionales />
        </div>
    </div>
  )
}

export default Profesionales