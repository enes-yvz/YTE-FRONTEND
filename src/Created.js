
import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Common.css';

function Created() {

    const { state } = useLocation();
    const { password } = state;

    let navigate = useNavigate();

    return (

        <div class="myContainer">
            <form class="newForm">
                <h1 class="first">User Created Succesfully</h1><br /><br />
                <section class="myFormWrapperr">
                    <h1 class="second">Password :</h1>
                    <h1 class="third">{password}</h1>
                </section>
                <div class="wrapper">
                    <button class ="newButton" onClick={(event) => {
                        navigate("/admin");
                    }}>Main Page</button>
                </div>
            </form>
        </div>
    );

}

export default Created;