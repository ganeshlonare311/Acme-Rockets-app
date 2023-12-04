import React from 'react'
import Header from './components/Header'
import MainB from './components/MainB'
import Rockets from './components/Rockets'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <>
      <Header />
      <MainB />
      <hr className='mx-auto w-1/4 bg-black dark:bg-white' />
      <Rockets />
      <hr className='mx-auto w-1/4 bg-black dark:bg-white' />
      <Testimonials />
      </>
  )
}
