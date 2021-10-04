import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Instruct = (props) => {
    const {name, img, range} = props.instruct;
    return (
        <div>
            <Col>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {range}
                </Card.Text>
                </Card.Body>
            </Col>
        </div>
    );
};

export default Instruct;