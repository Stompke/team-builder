import React from 'react';

import Member from './Member';

const MemberList = (props) => {

    return (
        <div className='member-list-container'>
            {props.teamMembers.map(member => <Member key={member.name} name={member.name} gender={member.gender}/>)} 
        </div>

    )
}

export default MemberList;