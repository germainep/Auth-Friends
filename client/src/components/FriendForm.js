import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FreindForm = ( props ) => {
  const [ friend, setFriend ] = useState({})

  const addFriend = () => {
    axiosWithAuth().post('http://localhost:5000/api/friends', friend)
                   .then(res => console.log(res))
  }

  const handleChanges = e => {
    setFriend({
                ...friend,
                [e.target.name]: e.target.value,
                id: props.friends.length + 1,
              })
  }

  return (
      <form onSubmit={ addFriend }>
        <label htmlFor='name'>Name:
          <input name='name' id='name' value={ friend.name } type='test'
                 onChange={ handleChanges }/>
        </label>
        <br/>
        <label htmlFor='age'>Age:
          <input name='age' id='age' value={ friend.age } type='number' onChange={ handleChanges }/>
        </label>
        <br/>
        <label htmlFor='email'>Email:
          <input name='email' id='email' type='email' value={ friend.email }
                 onChange={ handleChanges }/>
        </label>
        <br/>
        <button>Add Friend</button>
      </form>
  )
}

export default FreindForm
