import React from 'react'
import Header from './components/Header'
import MainB from './components/MainB'
import Rockets from './components/Rockets'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <MainB />
      <hr className='mx-auto w-1/4 bg-black dark:bg-white' />
      <Rockets />
      <hr className='mx-auto w-1/4 bg-black dark:bg-white' />
      <Testimonials />
      <hr className='mx-auto w-1/4 bg-black dark:bg-white' />
      <Contact />
      <Footer />
      </>
  )
}
