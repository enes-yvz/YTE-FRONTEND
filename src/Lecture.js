import { useState } from 'react';
import * as React from 'react';
import { Outlet } from "react-router-dom";
import './Common.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Lecture() {

    const [formState, setFormState] = useState({
        "name": "",
        "code": "",
        "location": "",
        "instructor":"",
        "startTime": "08:40",
        "endTime": "09:30",
        "type": "MANDATORY",
    });

    async function addLecture(formState) {
        const res = await axios.post("/lecture", formState);
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
                <h1 class="myH1" >New Lecture</h1>

                <label class="myLabel" htmlFor='name'>
                    Name
                </label>
                <input class="myInput" onChange={onFormInputChange} autoComplete="off" type="text" name="name" required maxLength={25} />

                <label class="myLabel" htmlFor='code'>
                    Code
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

                <label class="myLabel" htmlFor='type'>
                    Type
                </label>
                <select class="mySelect" onChange={onFormInputChange} name="type" required defaultValue="MANDATORY">
                    <option value="MANDATORY">MANDATORY</option>
                    <option value="OPTIONAL">OPTIONAL</option>
                </select>

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

                <label class="myLabel" htmlFor='endTime'>
                    End Time
                </label>

                <select class="mySelect" onChange={onFormInputChange} name="endTime" required defaultValue="08:40">
                    <option value="09:30">09:30</option>
                    <option value="10:30">10:30</option>
                    <option value="11:30">11:30</option>
                    <option value="12:30">12:30</option>
                    <option value="14:30">14:30</option>
                    <option value="15:30">15:30</option>
                    <option value="16:30">16:30</option>
                    <option value="17:30">17:30</option>
                </select>

                <div class="wrapper">
                    <button class="myButton" onClick={(event) => {

                        if (formState.name === "" || formState.code === "" || formState.location === "" || formState.instructor === "") {

                        }

                        else {

                            event.preventDefault();
                            
                            const res = addLecture(formState);

                            res.then((result) => {

                                if (result.data.responseType === "SUCCESS") {

                                }

                                else if (result.data.responseType === "ERROR") {

                                }
                            }

                            ).catch(error => console.log(error));

                        }


                    }}>Add</button>
                </div>
            </form>
            <Outlet />
        </div>
    );

}

export default Lecture;