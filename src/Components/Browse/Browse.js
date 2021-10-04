import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Browse = (props) => {
    const {name, describe} = props.browse;
    return (
        <div>            
             <Col>
            <Card className="bg-secondary text-white">
                <Card.Body className="m-5">
                <Card.Title className="text-info fw-bold">{name}</Card.Title>
                <Card.Text>
                    {describe}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </div>
        
    );
};

export default Browse;