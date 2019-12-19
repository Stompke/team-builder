import React from 'react';

const Member = (props) => {
    return (
        <div>
            {/* <h1>Hi my name is {props.name}</h1> 
            <h2>And I am a {props.role}.</h2>  */}
            {props.name ? <h1>Hi my name is {props.name}</h1> : ''}
            {props.role ? <h2>And I am a {props.role}.</h2> : ''}
            {props.email ? <h1>You can reach me at {props.email}</h1> : ''}
            {/* <h3>You can reach me at {props.email}  </h3> */}
            <button onClick={props.editMember('sup')}>edit</button>
        </div>
    )
}

export default Member;