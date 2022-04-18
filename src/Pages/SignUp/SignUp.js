import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app)

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const handleFormSubmit = (event) =>{
        event.preventDefault()
    }
    const handleEmail = event =>{
        setEmail(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    return (
        <div>
            <h2 className='text-center'>Sign Up</h2>
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
                    <Button onClick={()=>createUserWithEmailAndPassword(email, password)} variant="primary" type="submit">
                        SignUp
                    </Button>
                    <p>Already have an account?
                        <Link style={{textDecoration: 'none'}} to='/login'>Login Now</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;