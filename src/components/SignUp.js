import React, {useState} from 'react'

export default function SignUp() {
  const [formData, setformData] = useState({});


  const handleChange = (e)=> {
    setformData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(formData)

  }



  return (
    <div>
       <form onSubmit={handleSubmit}>
       <input
          type= "text"
          placeholder='name'
          name='name'
          required
          onChange={handleChange}
          />
        <input
          type= "email"
          placeholder='email'
          name='email'
          required
          onChange={handleChange}
          />
          <input
          type= "password"
          placeholder='password'
          name='password'
          required
          onChange={handleChange}
          />
          <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
