import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function TokenVerify() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [navigate])

  return null
}

function LandingPage() {
  return (
    <div className='h-full w-full bg-black'>
      <Navbar />
      <TokenVerify />
      
    </div>
  )
}

export default LandingPage
