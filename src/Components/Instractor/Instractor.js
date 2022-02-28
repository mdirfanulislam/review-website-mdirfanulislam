import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Instruct from './Instruct';

const Instractor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./Instructor.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    }, [])

    return (
        <div>
            <div className="bg-info p-5 mb-5 mt-5">
                <h1 className="bg-info p-5 fs-1 fw-bold text-white">Instrutors</h1>
            </div>
            <div className="m-5">
                <Row xs={2} md={2} lg={4} className="g-4">
                    {
                        instructors.map(instruct => <Instruct 
                        key = {instruct.id}
                        instruct={instruct}
                        ></Instruct>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Instractor;