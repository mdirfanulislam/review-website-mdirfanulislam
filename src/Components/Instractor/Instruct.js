import React from 'react';
import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Instruct = (props) => {
    const {name, img, range, dataAos} = props.instruct;

    AOS.init({
        duration: 1200,
      });

    return (
        <div>
            <Col data-aos={dataAos}>
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