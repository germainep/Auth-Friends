import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendList from './FriendList'
import FriendForm from './FriendForm'
import './Friends.css'

const Friends = ( props ) => {
  const [ friends, setFriends ] = useState([])

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends')
                   .then(res => {
                     console.log(res)
                     setFriends([ ...res.data ])
                   })
  }, [])

  return (
      <div>
        <FriendForm friends={ friends }/>
        <h1>Friends List</h1>
        <ul>
          { friends.map(friend => {
            return (
                <FriendList key={ friend.id } name={ friend.name } age={ friend.age }
                            email={ friend.email }/>
            )
          }) }
        </ul>
      </div>
  )
}

export default Friends
