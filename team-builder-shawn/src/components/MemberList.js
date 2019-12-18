import React, { useState } from 'react';

import Member from './Member';

const MemberList = (props) => {

    return (
        <div className='member-list-container'>
            {props.teamMembers.map(member => <Member key={member.id} name={member.name} email={member.email} role={member.role}/>)} 
        </div>

    )
}

export default MemberList;