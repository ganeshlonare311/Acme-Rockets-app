import React from 'react'

export default function Rockets() {
  return (
      <div className='-mt-12 h-screen w-full text-white flex flex-col justify-center items-center max-w-4xl mx-auto'>
      <h1 className='text-5xl mb-5 font-bold'>Our Rockets</h1>
      <div className='flex'>
      <div className='m-4 w-64 border h-64 rounded-3xl overflow-hidden flex flex-col justify-center items-center'>
        <img className='h-32 mb-5' src="https://acme-dusky.vercel.app/img/rocketman.png" alt="not found" />
        <h3 className='text-3xl'>Explorer</h3>
        <h1 className='text-3xl text-slate-400'>$</h1>
      </div>
      <div className='m-4 w-64 border h-64 rounded-3xl overflow-hidden flex flex-col justify-center items-center'>
        <img className='h-32 mb-5' src="https://acme-dusky.vercel.app/img/rocketride.png" alt="not found" />
        <h3 className='text-3xl'>Adventure</h3>
        <h1 className='text-3xl text-slate-400'>$$</h1>
      </div>
      <div className='m-4 w-64 border h-64 rounded-3xl overflow-hidden flex flex-col justify-center items-center'>
        <img className='h-32 mb-5' src="https://acme-dusky.vercel.app/img/rocketlaunch.png" alt="not found" />
        <h3 className='text-3xl'>Infinity</h3>
        <h1 className='text-3xl text-slate-400'>$$</h1>
      </div>
      </div>
      </div>
  )
}
