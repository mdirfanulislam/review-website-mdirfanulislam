import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { Row } from 'react-bootstrap';

const AboutMe = () => {
    const element = <FontAwesomeIcon icon={faStar} />
    return (
        <div>
            <Row xs={1}>
            <div className="bg-info p-5 mb-5">
                <h2 className="bg-info p-5 fs-1 fw-bold text-white">About Us</h2>
            </div>
            <div className="m-5 p-5 text-start">
                <h2 className="mx-5 px-5 mb-4">Our Mission</h2>
                <p className="mx-5 px-5">Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                <p className="mx-5 mb-5 px-5"> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                <h2 className="mx-5 mt-5 px-5 mb-4">Our Vision</h2>
                <p className="mx-5 px-5">Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
            </div>
            <div className="bg-success p-5 mb-5 text-white">
                <img src={'https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xtestimonial.png.pagespeed.ic.H9exCRemGK.webp'} alt="" />
                <div className="mx-5 px-5">
                <h4 className="px-5 m-5 justify-content-center">You can't succeed if you just do what others do and follow the well-worn path. You need to create anew and original path for yourself</h4>
                </div>
                <div className="d-flex justify-content-center text-warning">
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
                    <p>{element}</p>
                </div>
            </div>  

            <Row xs={1} md={3} className="my-5">
            <div className="mt-5 mb-5">
                <img src={'https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xabout2.png.pagespeed.ic.6xSE4VgknV.webp'} alt="" />
                
            </div>
            <div className="mt-5 pt-5">
                <h6 className="fw-bold text-info pt-5">More About Our Company</h6>
                <h2 className="fs-1 fw-bold mb-5">Want to know more</h2> 
                <p className="ps-4">There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                <br />
                <p>Creative ideas base</p>
                <p>Assages of sorem gpsum ilable</p>
                <p>Have suffered alteration in so</p>
                <p>Randomised words whi</p>
                <Button className="border border-1 border-info bg-primary px-5 py-2 fs-5 fw-bold mt-3">
                <Link className="text-decoration-none text-white" to="/aboutus">More About Us</Link>
            </Button>
            </div>
            <div className="mt-5">
                <img src={'https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xabout1.png.pagespeed.ic.OSu4ZWGT0Q.webp'} alt="" />
            </div>           
            </Row>
            </Row>
        </div>
    );
};

export default AboutMe;