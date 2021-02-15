import React from 'react';
import { Header } from './components/Header/Header'
import { AssignmentSection } from './components/AssignmentSection/AssignmentSection';
import { AcquaintedSection } from './components/AcquaintedSection/AcquaintedSection';
import { UsersSection } from './components/UsersSection/UsersSection';
import { RegistrationSection } from './components/RegistrationSection/RegistrationSection';

import './App.scss';


function App() {

  // users, setUsers

  // const addUser = (user) => {
  //   setUsers([user, ...users])
  // }

  return (
    <div className="App">
        <Header />

        <main className="App__main">
          <AssignmentSection />
          <AcquaintedSection />
          <UsersSection  />
          <RegistrationSection  />
          
          {/* <AssignmentSection />
          <AcquaintedSection />
          <UsersSection users setUsers />
          <RegistrationSection addUser /> */}
        </main>

    </div>
  );
}

export default App;
