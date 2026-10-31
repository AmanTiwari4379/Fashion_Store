import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quo ut facilis veritatis enim natus. Nobis veniam eum sequi. Nulla reiciendis obcaecati ratione nobis vitae sit dolorum doloribus, hic non numquam incidunt sed molestias exercitationem magnam eos quis pariatur cum expedita commodi distinctio! Quod saepe dolorum iusto eveniet sed nam.
      </p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email'/>
        <button onSubmit={onSubmitHandler} type='submit' className='bg-black text-white text-xm px-10 py-2'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
