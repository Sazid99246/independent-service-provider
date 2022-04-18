import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Benefit from '../Benefit/Benefit';

const Benefits = () => {
    const [benefits, setBenefits] = useState([]);
    useEffect(() => {
        fetch('benefits.json')
            .then(res => res.json())
            .then(data => setBenefits(data))
    }, [])
    return (
        <Container className='mt-2'>
            <h2 className='text-center'>Why me?</h2>
            <Row lg={3} md={2} sm={1} className='g-4'>
                {
                    benefits.map(benefit => <Benefit
                        benefit={benefit}
                        key={benefit.id}
                    ></Benefit>)
                }
            </Row>
        </Container>
    );
};

export default Benefits;