import React from 'react'

const Step03 = () => {

  return (
    <section className='relative overflow-hidden h-dvh bg-white text-black flex justify-center items-center border-4 border-red-600'>
        <span className='block w-[2500px] h-[2500px] rounded-full absolute top-[40%] left-1/2 -translate-x-1/2 bg-black'></span>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-center z-10'>
            <p className='text-6xl font-bold tracking-tight leading-none'>HTML5 + CSS3</p>
            <p className='text-6xl font-bold tracking-tight leading-none'>JAVASCRIPT</p>
            <p className='text-6xl font-bold tracking-tight leading-none'>JQUERY</p>
            <p className='text-6xl font-bold tracking-tight leading-none'>REACT + GSAP</p>
        </div>
    </section>
  )
}

export default Step03