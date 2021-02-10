import React from 'react';
import { Header } from './components/Header/Header'
import { AssignmentSection } from './components/AssignmentSection/AssignmentSection';
import { AcquaintedSection } from './components/AcquaintedSection/AcquaintedSection';
import { UsersSection } from './components/UsersSection/UsersSection';

import './App.scss';


function App() {
  return (
    <div className="App">
        <Header />

        <main className="App__main">
          <AssignmentSection />
          <AcquaintedSection />
          <UsersSection />
        </main>
    </div>
  );
}

export default App;
