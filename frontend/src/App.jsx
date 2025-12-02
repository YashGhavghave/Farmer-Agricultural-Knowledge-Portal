import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Index from './Routes/Index.jsx'


function TokenVerify() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [navigate])

  return null
}

function App() {
  return (
    <>
      <Index />
      <TokenVerify />
    </>
  )
}

export default App
