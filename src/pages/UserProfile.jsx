import React from 'react'
import UserProfile from '../components/UserProfile'

const UserView = (props) => {
  console.log(props)
  return (
    <div>
        <UserProfile {...props}/>
    </div>
  )
}

export default UserView