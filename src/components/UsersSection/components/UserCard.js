import React from 'react';
import './UserCard.scss';

export const UserCard = ({ user }) => {
  const changeUserIcon = (event) => {
    event.target.src = require('../../../images/photo-cover.png').default
  }
  
  return (
    <div key={user.id} className="card-user">
      <img 
        src= {user.photo}
        // onLoad={(evt) => {
        //   console.log(evt.target.height)
        // }}
        alt="user icon"
        className="card-user__icon"
        onError={changeUserIcon}
      />
      <p className="card-user__name">{user.name}</p>
      <p className="card-user__position">{user.position}</p>
      <a href={`mailto:${user.email}`} className="card-user__email">{user.email}</a>
      <a href={`tel:${user.phone}`} className="card-user__phone">{user.phone}</a>
    </div>
  )
}