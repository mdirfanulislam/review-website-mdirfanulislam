import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const element = <FontAwesomeIcon icon={faStar} />
    const {name, img} = props.course;
    return (
        <div>                                                               
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                <Card.Title className="fs-2 mb-5">{name}</Card.Title>
                <Row xs={2} md={2}>
                <div className="d-flex text-warning">
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
                </div>
                <div className="text-secondary">
                    <p>52 Review</p>
                </div>
                <div className="d-flex gap-5 mt-4">
                <p className="ms-2"><FontAwesomeIcon icon={faThumbsUp} /> 650</p>
                <p><FontAwesomeIcon icon={faHeart} /> 590</p>
                </div>
                <p className="text-secondary mt-4">Free</p>
                </Row>
                <Button className="border border-1 border-info bg-primary px-5 py-2 fs-5 fw-bold mb-2 mt-4">
                <Link className="text-decoration-none text-white" to="/courses">Enroll Now</Link>
            </Button>
                </Card.Body>
            </Card>
        </Col>

        </div>
    );
};

export default Course;