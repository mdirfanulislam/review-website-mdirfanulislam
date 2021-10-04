import React, { useEffect, useState } from 'react';
import Course from './Course';
import { Row } from 'react-bootstrap';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./Courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    
    return (
        <div>
            <div className="bg-info p-5 mb-5">
                <h1 className="bg-info p-5 fs-1 fw-bold text-white">All Courese</h1>
            </div>
            <div className="m-5">
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    courses.map(course => <Course 
                        key = {course.id}
                        course={course}
                        ></Course>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Courses;