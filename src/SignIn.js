import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from "react-router-dom";

function SignIn() {

    let navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    return (

        <div class ="container">
            <form class="myForm">
                <h1>Sign In</h1>
                <label htmlFor='username'>
                    User Name
                </label>
                <input autoComplete="off" type="text" id="userName" required value={userName} onChange={(event) => { console.log(event.target.value); setUserName(event.target.value) }} />
                <label htmlFor='password'>
                    Password
                </label>
                <input autoComplete="off" type="password" id="password" required value={password} onChange={(event) => { console.log(event.target.value); setPassword(event.target.value) }} />
                <button onClick={(event) => {
                        navigate("/Home");
                }}>Sign In</button>
                <p>
                    <span className="line">
                        {/*put router link here*/}
                        <a href="#">Forgot Password?</a>
                    </span>
                </p>
            </form>
        </div>
    );


}

export default SignIn ;