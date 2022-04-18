import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
import { Link } from 'react-router-dom';
const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, error] = useSignInWithEmailAndPassword(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    return (
        <div>
            <h2 className='text-center'>Login</h2>
            <div className='registration w-50 mx-auto'>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required onChange={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onChange={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit">
                        Log in
                    </Button>
                </Form>
                <p>Don't have an account?
                    <Link  style={{textDecoration: 'none'}} to='/signup'>Sign up now</Link>
                </p>
            </div>
            <Container className='d-flex align-items-center justify-content-between'>
                <div className='or-style'></div>
                <div>or</div>
                <div className='or-style'></div>
            </Container>
            <div className='d-flex justify-content-center'>
                <button onClick={() => signInWithGoogle()} className='google-sign-in rounded-2 d-flex align-items-center justify-content-between'>
                    <FcGoogle />
                    <div>Sign in with Google</div>
                </button>
            </div>
        </div>
    );
};

export default Login;