import React from 'react'

const Step06 = () => {
  
  return (
    <section className='h-dvh border-4 border-red-500 relative overflow-hidden bg-black text-white'>
        <div className='absolute text-8xl right-10 bottom-10 text-white'>
            <span></span>
            <span>/ 6</span>
        </div>
        <ul className='flex px-[30%] box-border'>
            {['work1.jpg', 'work2.jpg', 'work3.jpg', 'work4.jpg', 'work5.jpg', 'work6.jpg'].map((src, index) => (
                <li
                    key={index}
                    className='w-[700px] p-[100px] box-border flex-shrink-0'
                >
                    <a className='block w-full relative' href="/">
                        <div className='num' data-text={index + 1} ></div>
                        <div className='relative imgBox' >
                            <img className='w-full' src={src} alt="" />
                        </div>
                        <div className='absolute left-0 bottom-10 opacity-0'>
                            <p className='text-6xl'>Site Name</p>
                            <p className='text-xl'>UI/UX Design, Web Publising</p>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Step06

