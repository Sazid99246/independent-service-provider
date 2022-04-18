import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../../firebase.init';
const auth = getAuth(app)
const Header = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Sazid's English Coaching</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Nav className="d-flex">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                            {
                                user
                                    ? <button onClick={() => logOut()}>Sign out</button>
                                    : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                            {
                                user
                                    ? <button onClick={() => logOut()}>Sign out</button>
                                    : <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;