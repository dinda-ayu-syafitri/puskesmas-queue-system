import React, { useEffect, useState } from 'react'
import {SignUp, Login, Home} from './pages';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])
  

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Login setToken={setToken}/>}/>
        <Route path={'/Sign-Up'} element={<SignUp/>}/>
        <Route path={"/Home"} element={<ProtectedRoute><Home token={token}/></ProtectedRoute>}/>
      </Routes>
    </div>
  )
}

export default App