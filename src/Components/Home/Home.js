import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Browse from '../Browse/Browse';
import Teacher from '../Teacher/Teacher';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [browses, setBrowse] = useState([]);
    const [teachers, setTeacher] = useState([]);

    useEffect( () => {
        fetch('./Browse.JSON')
        .then(res => res.json())
        .then(data => setBrowse(data))
    }, []);

    useEffect( () => {
        fetch('./Teacher.json')
        .then(res => res.json())
        .then(data => setTeacher(data))
    }, []);

    AOS.init({
        duration: 1200,
      });

    return (
        <div>
            <Container fluid>
            <Row data-aos="fade-down" xs={1} md={2} className="align-items-center bg-info pt-5 mb-5 mt-5">
                <div>
                    <h6 className="fw-bold">Proper Online Courses</h6> 
                    <h1 className="fs-1 mx-5 mt-4 mb-5 fw-bold">The New Way To Learn Properly With Us!</h1>
                    <Button className="border border-1 rounded-circle border-info bg-primary px-5 py-2 fs-5 fw-bold mb-5">
                    <Link className="text-decoration-none text-white" to="/courses">Get Started</Link>
                    </Button>
                </div>
                <div>
                    <img className="img-fluid me-" src={'https://preview.colorlib.com/theme/onlineedu/assets/img/hero/xheroman.png.pagespeed.ic.-tVCH9AISL.webp'} alt="" />
                </div>
            </Row>
            </Container>


            <div data-aos="fade-down">
                <h6 className="fw-bold text-primary">Popular Online Courses</h6>
                <h2 className="fs-1 fw-bold">Lets Brows All Catagori</h2>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 m-5">         
                {
                    browses.map(browse => <Browse
                        key = {browse.id}
                        browse={browse}
                        ></Browse>)
                }      
            </Row>
            <div data-aos="zoom-in-up">
            <Button className="border border-1 rounded-circle border-info bg-primary px-5 py-2 fs-5 fw-bold mb-5">
                <Link className="text-decoration-none text-white" to="/courses">Find More Courses</Link>
            </Button>
            </div>
            
                
            <div className="bg-secondary mb-5">
            <div>
            <div data-aos="zoom-in-down">
                <h6 className="fw-bold text-info pt-5">More About Our Faculty</h6>
                <h2 className="fs-1 fw-bold text-white mb-5">Our Best Teachers</h2>     
            </div>
                <Row xs={1} md={2} className="g-5 mx-5 mb-5">
                    {
                        teachers.map(teacher => <Teacher 
                            key = {teacher.id}
                            teacher={teacher}
                            ></Teacher>)
                    }
                </Row>
            </div>
            <div>
            <Button className="border border-1 rounded-circle border-info bg-primary px-5 py-2 fs-5 fw-bold mb-5">
                <Link className="text-decoration-none text-white" to="/instractor">View All Faculty</Link>
            </Button>
            </div>
            </div>

            <Container fluid>
            <Row xs={1} md={1} lg={3}>
            <div data-aos="fade-down" className="mt-5  mb-5 pb-">
                <img width="320px" src={'https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xabout2.png.pagespeed.ic.6xSE4VgknV.webp'} alt="" />
            </div>
            <div data-aos="fade-up" className="mt-5">
                <h6 className="fw-bold text-info pt-5">More About Our Company</h6>
                <h2 className="fs- fw-bold mb-5">Want to know more</h2> 
                <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                <br />
                <p>Creative ideas base</p>
                <p>Assages of sorem gpsum ilable</p>
                <p>Have suffered alteration in so</p>
                <p>Randomised words whi</p>
            </div>
            <div data-aos="fade-down" className="mt-5">
                <img width="320px" src={'https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xabout1.png.pagespeed.ic.OSu4ZWGT0Q.webp'} alt="" />
            </div>
            </Row>
            </Container>

        </div>
    );
};

export default Home;