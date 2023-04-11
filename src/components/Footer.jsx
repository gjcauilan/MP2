import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function FooterNav() {
  return (
    <Container className="text-light bg-dark py-2" fluid>
      <Row className="justify-content-center">
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">Facebook</Col>
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">Messenger</Col>
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">YouTube</Col>
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">Telegram</Col>
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">Twitter</Col>
      </Row>
      <Row className="text-center mt-2">
        <p>© Au Priestess Emporium. All rights reserved.</p>
      </Row>
    </Container>
  );
}

export default FooterNav;