import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { UserCard } from './components/UserCard';
import testApi from '../../api/testApi'; 
import './UsersSection.scss';



// setUsers([registeredUser, ...users])
export const UsersSection = ({ users, setUsers}) => {
  // const [users, setUsers] = useState([]);
  const [nextLink, setNextLink] = useState('');
  const [allUsersFetched, setAllUsersFetched] = useState(false);

  const getUsers = (link) => {
    const payload = { count: 6 }
    
    if (link) {
      payload.link = link
    }

    testApi.getUsers(payload).then(({data}) => {
      const updatedUsers = [...users, ...data.users];
      updatedUsers.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
      setUsers(updatedUsers);
    
      setNextLink(data.links.next_url)
      
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
        onClick={() => {
          getUsers(nextLink)
        }}
        >
          Show more
        </button>
    </section>
  )
}


// email: "onie34@lubowitz.com"
// id: 1
// name: "Leanne West"
// phone: "+380936050764"
// photo: "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596d3bb1.jpeg"
// position: "Content manager"
// position_id: 2
// registration_timestamp: 1604494937