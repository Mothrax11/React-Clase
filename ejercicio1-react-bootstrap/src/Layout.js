import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Layout() {
    return (
        <>
            <Container> 
                <Row>
                    <Col sm={12} md={6} lg={4}  style={{backgroundImage: "url('fondo.png')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                    Hombre
                    </Col>
                    <Col sm={12} md={6} lg={4}  style={{backgroundImage: "url('fondo.png')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                    Mujer
                    </Col>
                    <Col sm={12} md={6} lg={4}  style={{backgroundImage: "url('fondo.png')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                    Niños
                    
                    </Col>
                </Row>
            </Container>
            <Container>
        
            </Container>
        </>
    );
}
export default Layout;
  