import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quo ut facilis veritatis enim natus. Nobis veniam eum sequi. Nulla reiciendis obcaecati ratione nobis vitae sit dolorum doloribus, hic non numquam incidunt sed molestias exercitationem magnam eos quis pariatur cum expedita commodi distinctio! Quod saepe dolorum iusto eveniet sed nam.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Collection</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@movemax.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ movemax.com -All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
