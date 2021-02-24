import React, { useState } from 'react';
import { Header } from './components/Header/Header'
import { AssignmentSection } from './components/AssignmentSection/AssignmentSection';
import { AcquaintedSection } from './components/AcquaintedSection/AcquaintedSection';
import { UsersSection } from './components/UsersSection/UsersSection';
import { RegistrationSection } from './components/RegistrationSection/RegistrationSection';

import './App.scss';


function App() {

  const [users, setUsers] = useState([]);
  console.log(users);

  const addUser = (user) => {
    console.log(users);
    setUsers([user, ...users])
  }

  return (
    <div className="App">
        <Header />

        <main className="App__main">
          <AssignmentSection />
          <AcquaintedSection />
          <UsersSection users={users} setUsers={setUsers} />
          <RegistrationSection addUser={addUser} />
          
          {/* <AssignmentSection />
          <AcquaintedSection />
          <UsersSection users setUsers />
          <RegistrationSection addUser /> */}
        </main>

    </div>
  );
}

export default App;
