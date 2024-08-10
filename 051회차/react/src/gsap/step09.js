import React from 'react'

const Step09 = () => {
  
  return (
    <section className='w-full h-dvh relative bg-black text-white border-4 border-red-600'>
        <div className="h-full max-w-[200px] my-0 mx-auto" style={{background: 'url(img_3.png)',backgroundRepeat: 'no-repeat', backgroundPosition: '0 center'}}></div>
        <p className="w-[450px] h-[450px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="w-full" src="spin_large.png" alt="" />
        </p>
    </section>
  )
}

export default Step09