import React from 'react';

const Member = (props) => {

    return (
        <h1>Hi my name is {props.name}. And I am a {props.role}. You can reach me at {props.email}</h1>
    )
}

export default Member;