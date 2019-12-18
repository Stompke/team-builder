import React, { useState } from 'react';
import { checkPropTypes } from 'prop-types';

const Form = (props) => {
    const [createMember, setCreateMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = event => {
        setCreateMember({...createMember, [event.target.name]: event.target.value });

    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(createMember)
        console.log(createMember);

    }

    return (
        <form onSubmit={submitForm}>
            <input onChange={handleChanges} type='text' name='name' placeholder='name' id='name' ></input><br />
            <input onChange={handleChanges} type='text' name='email' placeholder='email' id='email' ></input><br />
            <select onChange={handleChanges} type='text' name='role' placeholder='role' id='role' >
                <option value=''>Select One</option>
                <option value='backend engineer'>BackEnd Engineer</option>
                <option value='frontEnd engineer'>frontEnd Engineer</option>
                <option value='ux'>UX</option>
            </select>
            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default Form;