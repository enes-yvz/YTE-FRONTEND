
import { useState } from 'react';
import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Common.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Admin() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand >OBYS</Navbar.Brand>
            <Navbar.Toggle />
            <Nav className="mr-auto">
                <Nav.Link href="/Register">Add User</Nav.Link>
                <Nav.Link href="#bar">List Users</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Link href="/">Log Out</Nav.Link>
            </Nav>
        </Navbar>

    );

}

export default Admin;