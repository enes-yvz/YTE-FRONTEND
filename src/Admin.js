import * as React from 'react';
import './Common.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';

function Admin() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container fluid={true}>
                <Navbar.Brand >OBYS</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link href="/register">Add User</Nav.Link>
                    <Nav.Link href="/listUsers">List Users</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/">Log Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );

}

export default Admin;