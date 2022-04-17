import React from 'react';
import { Col } from 'react-bootstrap';

const Benefit = ({benefit}) => {
    const {img, description} = benefit;
    return (
        <Col className='d-flex flex-column align-items-center justify-content-between'>
            <img style={{height:'500px', width:"400px"}} src={img} alt="" />
            <p>{description}</p>            
        </Col>
    );
};

export default Benefit;