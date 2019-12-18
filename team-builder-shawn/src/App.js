import React, { useState } from 'react';

import MemberList from './components/MemberList';
import logo from './logo.svg';
import './App.css';

function App() {





const [teamMembers, setTeamMembers] = useState([
  {
  name: 'shawn',
  gender: 'male'
},
{ name: 'braden',
gender: 'male'}
]);

console.log(teamMembers);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <MemberList teamMembers={teamMembers} />


      </header>
    </div>
  );
}

export default App;
