import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img from '../assets/about us.jpg';

function AboutSec () {
    return (
        <div className="p-5">
            <h3 className="pb-2 text-center">About Us</h3>
            <Row className="align-items-center">
                <Col md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                    <Image src={img} alt="" fluid />
                </Col>
                <Col md={6}>
                    <p>At Au Priestess Emporium, we offer a diverse selection of high-quality products to suit every taste and style. From men's and women's clothing to electronics and jewelry, we have something for everyone.</p>
                    <p>Our jewelry collection is designed for the modern working man and woman, offering everyday fine jewelry as well as an extensive selection of Engagement & Wedding Rings in our specially assigned Wedding Section. Each piece is crafted with the utmost care and attention to detail, ensuring that it will stand the test of time and become a cherished part of your collection.</p>
                    <p>Jewelry has played an important role in cultures around the world throughout history, and we are proud to continue this tradition at Au Priestess Emporium. Our collections feature unique pieces made from natural materials that have undergone strict quality control and selection to ensure that our customers receive only the best.</p>
                    <p>So whether you're in the market for a new piece of jewelry, a stylish outfit, or the latest electronics, Au Priestess Emporium has you covered. Come and explore our virtual store and jewelry tour and discover the perfect addition to your collection.</p>
                </Col>
            </Row>
        </div>
    )
}

export default AboutSec;