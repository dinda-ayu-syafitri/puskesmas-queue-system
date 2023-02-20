import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home({token}) {
    let navigate = useNavigate()

    function handleLogout(params) {
        sessionStorage.removeItem('token')
        navigate('/')
    }

  return (
    <div>
        <h1>Welcome, {token.user.user_metadata.full_name}</h1>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Home