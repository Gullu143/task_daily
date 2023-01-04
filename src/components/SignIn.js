import React, { useState } from 'react'

export default function SignIn() {
  const[formData, setformData] = useState({});


  const handleChnge = (e) => {
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type= "email"
          placeholder='email'
          name='email'
          required
          onChange={handleChnge}
          />
          <input
          type= "password"
          placeholder='password'
          name='password'
          required
          onChange={handleChnge}
          />
          <button type='submit'>Login</button>
      </form>
    </div>
  )
}
