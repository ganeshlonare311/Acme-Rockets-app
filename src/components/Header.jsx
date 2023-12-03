import React from 'react'

export default function Header() {
  return (
      <header className='bg-teal-700 mb-1 sticky top-0'>
        <div className='text-white flex p-4 justify-between items-center max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold'>🚀Acma Rockets</h1>
          <ul className='flex gap-10 text-xl'>
            <li>Our Rockets</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </header>
  )
}
