import React from 'react'
import { useNavigate } from 'react-router-dom'
import Chatbot from '@/Chatbot'

const Homepage = ({token}) => {
  let navigate = useNavigate()
  
  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div>
      <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
      <button onClick={handleLogout}>Logout</button>

      <Chatbot></Chatbot>

    </div>
  )
}

export default Homepage