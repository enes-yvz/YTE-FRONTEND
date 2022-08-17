import { useState } from 'react';
import * as React from 'react';
import axios from 'axios';
import { useNavigate, Outlet } from "react-router-dom";
import './Common.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*

function Lecture() {

    let navigate = useNavigate();

    const [formState, setFormState] = useState({
        "name": "",
        "type": "",
        "code": "",
        "startTime": "",
        "endTime": "",
        "location": "",
        "instructor":""
    });

    async function addUser(formState) {
        //const res = await axios.post("/user", formState);
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

                <label class="myLabel" htmlFor='type'>
                    Surname
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="type" required maxLength={25} />

                <label class="myLabel" htmlFor='code'>
                    Username
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="code" required maxLength={25} />

                <label class="myLabel" htmlFor='location'>
                    Location
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="location" required />


                <label class="myLabel" htmlFor='lecturer'>
                    Instructor
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="instructor" required />

                <label class="myLabel" htmlFor='startTime'>
                    Start Time
                </label>

                <select class="mySelect" onChange={onFormInputChange} name="startTime" required defaultValue="08:40">
                    <option value="08:40">08:40</option>
                    <option value="09:40">09:40</option>
                    <option value="10:40">10:40</option>
                    <option value="11:40">11:40</option>
                    <option value="13:40">13:40</option>
                    <option value="14:40">14:40</option>
                    <option value="15:40">15:40</option>
                    <option value="16:40">16:40</option>
                </select>


                <div class="wrapper">
                    <button class="myButton" onClick={(event) => {

                        if (formState.name === "" || formState.surname === "" || formState.username === "" || formState.email === "") {

                        }

                        else {

                            event.preventDefault();
                            const res = addUser(formState);
                            res.then((result) => {

                                if (result.data.responseType === "SUCCESS") {

                                    navigate("/Created", { state: { password: result.data.password } })

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

export default Lecture;

*/