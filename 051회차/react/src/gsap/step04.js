import React from 'react'

const Step04 = () => {
    
  return (
    <>
    <section className='h-dvh bg-black text-white flex justify-center items-center border-4 border-red-600'>
        <div className='text-8xl uppercase leading-tight'>
            <span className='text-transparent block' style={{WebkitTextStroke:'2px #b1dd40'}}>GSAP</span>
            ScrollTrigger
        </div>
    </section>
    
    <section  className='w-full h-dvh relative overflow-hidden'>
        <div>
            <video className='w-dvw h-dvh object-cover absolute left-0 top-0' autoPlay muted loop playinline> 
                <source src='video.mp4' type="video/mp4" />
            </video>
            <div className='absolute w-full text-center left-0 top-1/2 -translate-y-1/2 text-white'>
                <h2 className='text-8xl leading-none tracking-widest'>Creativeness is all you need<br/>for Digital Design</h2>
            </div>
        </div>
    </section>
    </>
  )
}

export default Step04