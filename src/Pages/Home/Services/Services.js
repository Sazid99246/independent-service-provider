import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-center'>My Services</h2>
            <Container>
                <Row lg={3} md={2} xs={1} className='g-4'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                            ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;