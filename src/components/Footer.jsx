import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-teal-700 w-full h-44'>
        <div className='text-white flex justify-between max-w-4xl mx-auto p-4 text-xl'>
            <ul>
              <i>
              <li>Acme Rocket-Powered Products, Inc.</li>
              <li>555 Astro Way</li>
              <li>Fairfield, New Jersey 12345-5555</li>
              <li>Email: Inquires@AcmeRockets.com</li>
              <li>Phone: (555) 555-5555</li>
              </i>
            </ul>
            <ul>
              <li>Our Rockets</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>Copyright © 2022</li>
              <li>All Rights Reserved</li>
            </ul>
        </div>
    </footer>
  )
}
