import React from 'react';
import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Browse = (props) => {
    const {name, describe, dataAos} = props.browse;
    
    AOS.init({
        duration: 1200,
      });

    return (
        <div>            
            <Col data-aos={dataAos}>
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