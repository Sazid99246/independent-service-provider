import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const {img, name, description, price} = service;
    return (
        <Col>
            <Card className='rounded-2' style={{height: '750px'}}>
                <Card.Img className='img-fluid' style={{height: '500px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Button variant='primary'>Checkout</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;