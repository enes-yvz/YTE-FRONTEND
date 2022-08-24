
import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Common.css';

function Created() {

    const { state } = useLocation();
    const { password } = state;

    let navigate = useNavigate();

    return (

        <div className="myContainer">
            <form className="newForm">
                <h1 className="first">User Created Succesfully</h1><br /><br />
                <section className="myFormWrapperr">
                    <h1 className="second">Password :</h1>
                    <h1 className="third">{password}</h1>
                </section>
                <div className="wrapper">
                    <button className ="newButton" onClick={(event) => {
                        navigate("/admin");
                    }}>Main Page</button>
                </div>
            </form>
        </div>
    );

}

export default Created;