import React from 'react'
import hero from '../../assets/hero.png'
import play from '../../assets/play.png'

function Hero() {
  return (
    <section>
      <div className='container mt-10'>
      <div className='relative'>
        <img  src={hero} alt="" />
      <div className=' absolute flex inset-0 items-center justify-center'>
        <button className='p-6 bg-white'><img src={play} alt="" /></button>
      </div>
      </div>
      </div>

    </section>
  )
}

export default Hero