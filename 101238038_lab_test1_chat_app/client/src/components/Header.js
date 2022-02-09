import React,{useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';
import '../bootstrap.min.css';

function Header(props) {
    const onclickHandler = () =>{
        axios.get('/api/users/logout')
        .then(response =>{
            if(response.data.success){
                props.history.push("/")
                alert('Logout Success')
            } else {
                alert('Logout Failed')
            }
        })
    }
    return (<header>
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <LinkContainer to='/dashboard'>
                    <Navbar.Brand>Home</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
                <button onClick={onclickHandler}>LogOut</button>
            </Container>
        </Navbar>
    </header>
    )
};

export default withRouter(Header);

