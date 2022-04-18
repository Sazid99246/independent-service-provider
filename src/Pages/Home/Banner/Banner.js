import React from 'react';
import { Container } from 'react-bootstrap';
import BannerImg from '../../../images/banner-img.png'
const Banner = () => {
    return (
        <Container className='d-flex flex-lg-row flex-column align-items-center justify-content-between'>
            <img className='img-fluid' src={BannerImg} alt="" />
            <div>
                <h3>Hey, looking for an English tutor?</h3>
                <p>I am here with you to help with your weakness in English. I have a 5 years of experience of teaching English and I can ensure you getting A+ in it.</p>
            </div>
        </Container>
    );
};

export default Banner;