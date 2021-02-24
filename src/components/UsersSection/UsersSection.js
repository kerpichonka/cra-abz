import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { UserCard } from './components/UserCard';
import testApi from '../../api/testApi'; 
import './UsersSection.scss';



// setUsers([registeredUser, ...users])
export const UsersSection = ({ users, setUsers}) => {

  const [allUsersFetched, setAllUsersFetched] = useState(false);

  const getUsers = () => {
    const payload = { count: 6, offset: users.length}
    
    testApi.getUsers(payload)
      .then(({data}) => {
        const updatedUsers = [...users, ...data.users];

        updatedUsers.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
        setUsers(updatedUsers);
        
        if(updatedUsers.length === data.total_users) {
          setAllUsersFetched(true);
        }
      })
  }

  useEffect(getUsers, [])

  return (
    <section className="users">
      <h2 className="users__title">
        Our cheerful users
      </h2>
      <p className="users__mark">
        Attention! Sorting users by registration date
      </p>
      <div className="users__cards">
        {users.length > 0 && users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <button 
        type="button" 
        className={classNames("users__button", {"users__button--hidden": allUsersFetched})}
        onClick={getUsers}
        >
          Show more
        </button>
    </section>
  )
}