import React from 'react'

export default function MainB() {
  return (
    <>
      <div className='-mt-12 h-screen w-full text-white flex justify-between items-center max-w-4xl mx-auto'>
      <div>
      <h1 className='text-5xl font-bold mb-4'>
      We Boldly Go <br/> <span className='text-blue-300'> Where No Rocket</span> <br/> Has Gone <br/> Before...
      </h1>
      <p className='mb-4 text-2xl text-blue-200'>We're building rockets for the next <br/> century today. From the moon to <br /> Mars, Jupiter and beyond...</p>
      <p className='mb-4 text-2xl text-blue-200'>Think Acme Rockets.</p>
      </div>
      <div>
        <img src="https://acme-dusky.vercel.app/img/rocketdab.png" alt="Rocket" />
      </div>
      </div>
    </>
  )
}
