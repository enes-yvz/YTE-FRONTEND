import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Common.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        <div class ="myContainer">
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
                <button class ="myButton" onClick={(event) => {

                    event.preventDefault();
                    const res = getUser();
                    
                    res.then((result) => 
                
                {       
                        const user = JSON.parse(result.data.user);

                        if (user.password === "XXXXXXXXXX") {

                            toast.error("Username or password is wrong");

                        }

                        else if (user.role === "STUDENT" ) {

                            navigate("/Student",{ state: user })
                        
                        }
                        
                        else if (user.role  === "ASSİSTANT" ) {
                                
                            navigate("/Assistant",{ state: user })

                        }

                        else if (user.role  === "INSTRUCTOR" ) {

                            navigate("/Instructor",{ state: user })
                        }

                        else if (user.role === "ADMIN" ) {

                            navigate("/Admin",{ state: user })

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