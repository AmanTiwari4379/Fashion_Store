import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title';
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti beatae eius dolorum, eum ullam nisi nesciunt delectus libero velit et voluptate ea. Inventore laborum minus dicta, quis aliquam ullam corporis autem quos odio a non, labore.</p>
          <p>Corrupti beatae eius dolorum, eum ullam nisi nesciunt delectus libero velit et voluptate ea. Inventore laborum minus dicta, quis aliquam ullam corporis autem quos odio a non, labore.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Corrupti beatae eius dolorum, eum ullam nisi nesciunt delectus libero velit et voluptate ea. Inventore laborum minus dicta, quis aliquam ullam corporis autem quos odio a non, labore.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenince:</b>
          <p className='text-gray-600'>With our user friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
  )
}

export default About
