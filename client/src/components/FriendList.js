import React from 'react'
import './FriendList.css'

const FriendList = ( props ) => {
  return (
      <li>
        <h1>{ props.name }</h1>
        <p><span>Age: </span> { props.age }</p>
        <p><span>Email: </span> { props.email }</p>
      </li>
  )
}

export default FriendList
