import React from 'react';
import { Navbar, Nav, Container} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';
import '../bootstrap.min.css';
 
function Headerr() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer> 
                        <LinkContainer to='/register'>
                            <Nav.Link>SIGNUP</Nav.Link>
                        </LinkContainer>    
                        <LinkContainer to='/login'>
                            <Nav.Link>SIGNIN</Nav.Link>
                        </LinkContainer>    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default withRouter(Headerr)