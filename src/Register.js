
import React, { useState } from 'react';
import './Register.css';

function Register() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('Student');

    return (

        <div class="container">
            <form class="myForm">
                <h1>New User</h1>

                <label htmlFor='name'>
                    Name
                </label>
                <input autoComplete="off" type="text" id="name" required value={name} onChange={(event) => { console.log(event.target.value); setName(event.target.value) }} />
                
                <label htmlFor='surname'>
                    Surname
                </label>
                <input autoComplete="off" type="text" id="surname" required value={surname} onChange={(event) => { console.log(event.target.value); setSurname(event.target.value) }} />
                
                <label htmlFor='email'>
                    Email Address
                </label>
                <input autoComplete="off" type="text" id="email" required value={email} onChange={(event) => { console.log(event.target.value); setEmail(event.target.value) }} />
                
                <label htmlFor='username'>
                    Username
                </label>
                <input autoComplete="off" type="text" id="username" required value={username} onChange={(event) => { console.log(event.target.value); setUsername(event.target.value) }} />
                
                {/*<label htmlFor='password'>
                    Password
                </label>
                <input autoComplete="off" type="password" id="password" required value={password} onChange={(event) => { console.log(event.target.value); setPassword(event.target.value)}} />*/}
                
                <label htmlFor='roles'>
                    Roles
                </label>
                <select required value={role} onChange={(event) => {console.log(event.target.value); setRole(event.target.value)}}>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>
                    <option value="Assistant">Assistant</option>
                    <option value="Lecturer">Lecturer</option>
                </select>
                <button onClick={(event) => {
                    //navigate("/Home");
                }}>Create</button>
            </form>
        </div>
    );

}

export default Register;