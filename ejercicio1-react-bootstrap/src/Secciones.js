import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Secciones() {
  return (
    <>
    <div style={{backgroundImage:"/ejercicio1-react-bootstrap/public/mockup.png"}}>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    Columna1
                </Col>
                <Col sm={12} md={6} lg={4}>
                    Columna2
                </Col>
                <Col xs={12} md={6} lg={4}>
                    Columna3
                </Col>
            </Row>
        </Container>
    </div>
    </>
  );
}

export default Secciones;
