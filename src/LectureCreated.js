
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import './Common.css';

function LectureCreated() {

    let navigate = useNavigate();

    return (

        <div className="myContainer">
            <form className="newForm">
                <h1 className="first">Lecture Created Succesfully</h1><br /><br />
                <div className="wrapper">
                    <button className ="newButton" onClick={(event) => {
                        navigate("/admin");
                    }}>Main Page</button>
                </div>
            </form>
        </div>
    );

}

export default LectureCreated;