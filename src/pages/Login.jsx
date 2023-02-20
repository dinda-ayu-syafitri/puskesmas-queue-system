import React, { useState } from 'react'
import {supabase} from '../client'
import {Link,useNavigate} from 'react-router-dom'

const Login = ({setToken}) => {
    let navigate = useNavigate()

  const [formData,setFormData] = useState({
    email:'', password:''
  })

  console.log(formData)

  function handleChange(event) {
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        })

        if (error) throw error
        console.log(data)
        setToken(data)
        navigate('/Home')
    } catch (error) {
        alert(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' onChange={handleChange} name="email"/>
        <input type="password" placeholder='Password' onChange={handleChange} name="password"/>
        <button type="submit">Sign In</button>
      </form>

      <span>Don't have an account?</span><Link to={'/sign-up'}>Sign Up</Link>
    </div>
  ) 
}

export default Login