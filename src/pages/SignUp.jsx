import React, { useState } from 'react'
import {supabase} from '../client'
import {Link} from 'react-router-dom'

const SignUp = () => {

  const [formData,setFormData] = useState({
    fullname:'', email:'', password:''
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
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullname,
            }
          }
        }
      )
      alert('Check your email for verification link')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' onChange={handleChange} name="fullname"/>
        <input type="email" placeholder='Email' onChange={handleChange} name="email"/>
        <input type="password" placeholder='Password' onChange={handleChange} name="password"/>
        <button type="submit">Sign Up</button>
      </form>

      <span>Already have an account?</span><Link to={'/'}>Login</Link>
    </div>
  ) 
}

export default SignUp