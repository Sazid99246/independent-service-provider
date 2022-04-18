import React from 'react';
import { Container } from 'react-bootstrap';
import myPhoto from '../../images/myimage.jpg'
const About = () => {
    return (
        <div>
            <h2 className='text-center'>About Me</h2>
            <Container className='d-flex flex-sm-column flex-md-row align-items-center justify-content-between'>
                <img className='img-fluid' src={myPhoto} alt="" />
                <div className='ms-4'>
                    <p>Hi, I am Sheikh MD Sazidul Islam. I am a student at Department of English of Notrthern University of Business and Technology, Khulna. I want to be an English teacher in future. It is always my passion to learn something new. I am now learning web development. I love to code. But, beside coding, I always am practising English language. I am trying my best to be a better English teacher in our country.</p>
                </div>
            </Container>
        </div>
    );
};

export default About;