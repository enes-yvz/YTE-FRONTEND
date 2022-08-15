import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Common.css';
import axios from 'axios';

function Login() {

    let navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function getUser() {
        const res = await axios.post("/login",{
            "username":username,
            "password":password
        });
        return res;
    }

    return (

        <div class ="container">
            <form class="myForm">
                <h1>Login
                </h1>
                <label htmlFor='username'>
                    Username
                </label>
                <input autoComplete="off" type="text" id="username" required value={username} onChange={(event) => { console.log(event.target.value); setUserName(event.target.value) }} />
                <label htmlFor='password'>
                    Password
                </label>
                <input autoComplete="off" type="password" id="password" required value={password} onChange={(event) => { console.log(event.target.value); setPassword(event.target.value) }} />
                <div class="wrapper">
                <button onClick={(event) => {

                    event.preventDefault();
                    const res = getUser();
                    
                    res.then((result) => 
                
                {       const user = JSON.parse(JSON.stringify(result.data.user));

                        console.log(user.role);

                        if (user.role === "STUDENT" ) {

                            navigate("/Created",{ state: { password:result.data.password} })
                        
                        }
                        
                        else if (result.data.responseType === "ASSİSTANT" ) {

                        }

                        else if (result.data.responseType === "INSTRUCTOR" ) {

                        }

                        else if (result.data.responseType === "ADMIN" ) {

                        }
                })
                }}>Log In</button>
                <p>
                    <span className="line">
                        {/*put router link here*/}
                        <a href="#">Forgot Password?</a>
                    </span>
                </p>
                </div>
            </form>
        </div>
    );
}

export default Login;