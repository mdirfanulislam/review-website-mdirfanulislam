import { Card, Col } from 'react-bootstrap';

const Teacher = (props) => {
    const {name, img, range} = props.teacher;
    return (
        <div>
            <Col>
            <Card className="mx-5 pb-4">
                <Card.Img src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {range}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Teacher;