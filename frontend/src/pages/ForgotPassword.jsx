import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const { backendUrl } = useContext(ShopContext);
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/forgot-password',
        { email }
      )
      toast.success(data.message)
    } catch (error) {
      toast.error(error.response?.data?.message || "server error")
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>Send Reset Link</button>
    </form>
  )
}

export default ForgotPassword
