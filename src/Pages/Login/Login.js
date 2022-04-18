import React from 'react';
import { Container } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2 className='text-center'>Login</h2>
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