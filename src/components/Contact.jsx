import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import img from '../assets/carousel1.jpg';

function ContactForm() {
    const formStyling = {
        width: '30vw',
        margin: '0 auto',
    }

    const buttonStyling = {
        display: 'block',
        margin: '0 auto',
    }

    const imageStyling = {
        borderRadius: '50%',
        width: '100%',
        height: 'auto',
        maxWidth: '300px',
        padding: '10px'
    }

    return (
        <div className="p-5 text-dark bg-info">
            <h3 className="text-center mb-2">Get in Touch!</h3>
            <p className="text-center mb-5">We love to hear from our customers. Feel free to contact us with any questions or special requests.</p>
            <Row className="align-items-center">
                <Col xs={12} md={7}>
                    <Form style={formStyling} className="justify-content-center">
                        <Form.Control
                            type="email"
                            placeholder="Email Address"
                            className="mb-2"
                            aria-controls="Email"
                        />
                        <Form.Control
                            as="textarea"
                            placeholder="Name"
                            className="mb-2"
                            rows={1}
                        />
                        <Form.Control
                            as="textarea"
                            placeholder="Message"
                            className="mb-5"
                            rows={5}
                        />
                        <Button variant="outline-dark" style={buttonStyling}>Submit</Button>
                    </Form>
                </Col>
                <Col xs={12} md={5} className="d-flex justify-content-center">
                    <Image src={img} fluid style={imageStyling} />
                </Col>
            </Row>
        </div>
    )
}

export default ContactForm;