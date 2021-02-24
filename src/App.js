import React, { useState } from 'react';
import { Header } from './components/Header/Header'
import { AssignmentSection } from './components/AssignmentSection/AssignmentSection';
import { AcquaintedSection } from './components/AcquaintedSection/AcquaintedSection';
import { UsersSection } from './components/UsersSection/UsersSection';
import { RegistrationSection } from './components/RegistrationSection/RegistrationSection';

import './App.scss';


function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
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
        </main>
        
        <footer className="App__footer">
          <p className="App__footer-paragraph">&#169;abz.agency specially for the test task</p>
        </footer> 
    </div>
  );
}

export default App;
