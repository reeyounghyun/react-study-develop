import React from 'react'

const Step07 = () => {
   
  return (
    <section className='w-full text-center bg-black text-white py-64 border-4 border-red-600 relative z-50'>
        <ul className='w-1/2 mx-auto my-0'>
            {['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'].map((src, index) => (
                <li className='mb-20' key={index}>
                    <a href='/' className='block w-full h-full'>
                        <img className='fixed top-0 left-0 w-[350px] h-[220px] object-cover brightness-50 opacity-0 fadeImg' src={src} alt=''></img>
                        <p className="text-8xl font-bold leading-none tracking-tight transition-all opacity-100 ">Design <span className="inline-block w-3 h-3 bg-[#f45b40] rounded-full ml-10"></span></p>
                        <p className="text-6xl transition-all opacity-100 ">Agency</p>
                    </a>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Step07