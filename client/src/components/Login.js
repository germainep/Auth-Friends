import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = ( props ) => {
  const [ credentials, setCredentials ] = useState({})

  const login = e => {
    e.preventDefault()
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
                   .then(response => {
                     console.log(response)
                     localStorage.setItem('token', response.data.payload)
                     props.history.push('/friends')
                   })

  }

  const handleChanges = ( e ) => {
    setCredentials({
                     ...credentials,
                     [e.target.name]: e.target.value,
                   })
  }

  return (
      <form onSubmit={ login }>
        <label htmlFor='username'>Username:</label>
        <input id='username' name='username' value={ credentials.username } type='text'
               onChange={ handleChanges }/>
        <br/>
        <label htmlFor='password'>Password:</label>
        <input id='password' name='password' value={ credentials.password } type='password'
               onChange={ handleChanges }/>
        <br/>
        <button>Login</button>
      </form>
  )
}

export default Login
