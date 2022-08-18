
import { useState } from 'react';
import * as React from 'react';
import axios from 'axios';
import { useNavigate, Outlet } from "react-router-dom";
import './Common.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const studentUsername = /^[0-9]{5,10}$/;

    const customUsername = /^[a-zA-z]{4,10}[.][a-zA-z]{4,10}$/;

    let navigate = useNavigate();

    const [formState, setFormState] = useState({
        "name": "",
        "surname": "",
        "username": "",
        "email": "",
        "role": "STUDENT"
    });

    async function addUser(formState) {
        const res = await axios.post("/user", formState);
        return res;
    }

    function onFormInputChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        const newState = { ...formState };
        newState[field] = value;
        setFormState(newState);
    }

    return (

        <div class="myContainer">
            <form class="myForm">
                <h1 class="myH1" >New User</h1>

                <label class="myLabel" htmlFor='name'>
                    Name
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="name" required maxLength={25} />

                <label class="myLabel" htmlFor='surname'>
                    Surname
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="surname" required maxLength={25} />

                <label class="myLabel" htmlFor='username'>
                    Username
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="username" required maxLength={25} />

                <label class="myLabel" htmlFor='email'>
                    Email Address
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="email" required />

                <label class="myLabel" htmlFor='role'>
                    Roles
                </label>

                <select class="mySelect" onChange={onFormInputChange} name="role" required defaultValue="Student">
                    <option value="STUDENT">Student</option>
                    <option value="ADMIN">Admin</option>
                    <option value="ASSISTANT">Assistant</option>
                    <option value="INSTRUCTOR">Instructor</option>
                </select>
                <div class="wrapper">
                    <button class="myButton" onClick={(event) => {

                        if (formState.name === "" || formState.surname === "" || formState.username === "" || formState.email === "") {

                        }

                        else if (formState.role === "STUDENT" && !studentUsername.test(formState.username)) {

                            event.preventDefault();

                            toast.error("Incorrect username format for student ");

                        }

                        else if ((formState.role === "ASSISTANT" || formState.role === "INSTRUCTOR") && !customUsername.test(formState.username)) {

                            event.preventDefault();
                            
                            toast.error("Incorrect username format for asistant or instructor");

                        }

                        else {

                            event.preventDefault();

                            const res = addUser(formState);
                            res.then((result) => {

                                if (result.data.responseType === "SUCCESS") {

                                    navigate("/created", { state: { password: result.data.password } })

                                }

                                else if (result.data.responseType === "ERROR") {

                                    toast.error("User with same username or email already exist");

                                }
                            }

                            ).catch(error => console.log(error));

                        }


                    }}>Create</button>
                </div>
            </form>
            <Outlet />
        </div>
    );

}

export default Register;