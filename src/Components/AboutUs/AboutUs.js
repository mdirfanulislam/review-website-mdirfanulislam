import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    const element = <FontAwesomeIcon icon={faStar} />

    AOS.init({
        duration: 1200,
      });

    return (
        <div>
            <Container fluid>
            <Row xs={1} md={1} lg={1}>
            <div className="bg-info py-5 mb-5 mt-5">
                <h2 className="bg-info py-5 fs-1 fw-bold text-white">About Us</h2>
            </div>
            <div className="text-start">
                <h2 className="mb-4">Our Mission</h2>
                <p className=" ">Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                <p className="mb-5"> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                <h2 className="mt-5 mb-4">Our Vision</h2>
                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
            </div>
            <div data-aos="zoom-in" className="bg-success py-5 mb-5 text-white">
                <img src={'https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xtestimonial.png.pagespeed.ic.H9exCRemGK.webp'} alt="" />
                <div className=" ">
                <h4 className="justify-content-center">You can't succeed if you just do what others do and follow the well-worn path. You need to create anew and original path for yourself</h4>
                </div>
                <div className="d-flex justify-content-center text-warning">
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
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

            </Row>
            </Container>
        </div>
    );
};

export default AboutMe;