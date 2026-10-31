import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

const ResetPassword = () => {
  const { token } = useParams()
  const [password, setPassword] = useState('')
    const { backendUrl } = useContext(ShopContext);
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        backendUrl + `/api/user/reset-password/${token}`,
        { password }
      )
      toast.success(data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="password"
        placeholder="New password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>Reset Password</button>
    </form>
  )
}

export default ResetPassword
