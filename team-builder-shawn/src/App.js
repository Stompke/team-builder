import React, { useState } from 'react';

import MemberList from './components/MemberList';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

function App() {





const [teamMembers, setTeamMembers] = useState([
  {
  
    id: 1,
    name: 'shawn',
  email: 'shawn@gmail.com',
    role: 'Full Stack Developer'
},
{ 
  id: 2,
  name: 'braden',
email: 'braden@gmail.com',
  role: 'UX'}
]);



const addNewMember = member => {
  const newMember = {
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role
  }
  setTeamMembers([...teamMembers, newMember]);
}


console.log(teamMembers);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form addNewMember={addNewMember} />
        
        <MemberList teamMembers={teamMembers} />

      </header>
    </div>
  );
}

export default App;
