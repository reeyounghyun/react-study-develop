import React from 'react'

const Step02 = () => {

  return (
    <section className='relative h-dvh bg-black text-black flex justify-center items-center border-4 border-red-600'>
        <span className=' w-60 h-80 bg-[#fee8b0] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(-12deg)'}} >Card1</span>
        <span className=' w-60 h-80 bg-[#ffbbcc] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(12deg)'}} >Card2</span>
        <span className=' w-60 h-80 bg-[#ffcccc] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(-15deg)'}} >Card3</span>
        <span className=' w-60 h-80 bg-[#df9773] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(18deg)'}} >Card4</span>
        <span className=' w-60 h-80 bg-[#d9eccb] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' style={{transform:'translate(-50%, -50%) rotate(-3deg)'}} >Card5</span>
    </section>
  )
}

export default Step02