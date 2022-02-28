import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Teacher = (props) => {
    const {name, img, range, dataAos} = props.teacher;

    AOS.init({
        duration: 1200,
      });

    return (
        <div>
            <Col data-aos={dataAos}>
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