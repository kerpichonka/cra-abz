import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './UsersSection.scss';
import { getUsers, getImage } from '../../api/testApi'; 

export const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [nextLink, setNextLink] = useState('');
  const [allUsersFetched, setAllUsersFetched] = useState(false);


  useEffect(() => {
    getUsers()
      .then(({ data }) => {

        data.users.forEach(user => {
          getImage({id: user.id, url: user.photo})
        });


        const users = [...data.users]
        users.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
        setUsers(users);
        console.log(data)
        setNextLink(data.links.next_url)
        if(users.length === data.total_users) {
          setAllUsersFetched(true);
        }
      })
  }, [])
  return (
    <section className="users">
      <h2>
        Our cheerful users
      </h2>
      <p>
        Attention! Sorting users by registration date
      </p>
      <div className="users__cards">
        {users && users.map(user => (
          <div key={user.id} className="users__card">
            <img src={user.photo} alt="user icon" ></img>
            <p>{user.name}</p>
            <p>{user.position}</p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </div>
        ))}
      </div>

      <button 
        type="button" 
        className={classNames("users__button", {"users__button--hidden": allUsersFetched})}
        onClick={() => {
          getUsers({ link: nextLink })
            .then(({ data }) => {
              // setUsers( users => )

              // add users to prev users
              const newUsers = [...users, ...data.users];

              newUsers.forEach(user => {
                getImage({id: user.id, url: user.photo}).then(data => {
                  if (data.error) {

                    const userWithBrokenImage = newUsers.find(u => u.id === data.id)
                    userWithBrokenImage.photo = '../../images/user-icon.png'

                    console.log(users)
                    console.log(userWithBrokenImage)
                  }
                })
              });

              
              // S O R T
              newUsers.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
              setUsers(newUsers);
              setNextLink(data.links.next_url)
              // SET users

              
       



              if(newUsers.length === data.total_users) {
                setAllUsersFetched(true);
              }
              // set nextLINK
            })
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