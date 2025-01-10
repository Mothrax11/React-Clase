import React from "react";
import {Container, Row, Col, Image, Stack} from 'react-bootstrap';

function Mockup (){


    return(
        <>
        <Container style={{marginTop:'10%'}}>
            <Stack gap={4}>
            <Row>
                <Col md={8} lg={8}>
                    <Image src='Larga.jpg' fluid alt="Pizza"></Image>
                </Col>
                <Col md={3} lg={3}>
                    <Stack gap={5}>
                        <Image src='mesa.jpg' fluid alt="Pizza"></Image>
                        <Image src='Comida2.jpg' fluid alt="Pizza"></Image>
                    </Stack>
                </Col>
                <Col md={1} lg={1}>
                <Stack gap={4}>
                    <div>
                        Mesa con comida y diversos ingredientes.
                    </div>
                    <div>
                        Tacos tipicos mexicanos.
                    </div>
                </Stack>
                </Col>
            </Row>
        
            <Row md={12} lg={12}>
                <div>
                    Hablemos sobre la pizza:
                </div>
            </Row>
        
            <Row>
                <Col md={8} lg={8}>
                    <div>La pizza es uno de los platos más populares en todo el mundo, apreciada por su versatilidad y sabor. Desde la clásica margarita hasta combinaciones innovadoras, cada región ofrece su propia interpretación. Además, puede adaptarse a diferentes dietas, incluyendo opciones vegetarianas y sin gluten, lo que la convierte en un favorito universal.</div>
                </Col>
            
                
                <Col md={3} lg={3}>
                    <Stack gap={5}>
                        <Image src='Comida3.jpg' fluid alt="Pizza"></Image>
                        <Image src='Comida4.jpg' fluid alt="Pizza"></Image>
                    </Stack>
                </Col>
                <Col md={1} lg={1}>
                <Stack gap={4}>
                    <div>
                    Spaghettis con albóndigas.
                    </div>
                    <div>
                        Ensalada con aguacate.
                    </div>
                </Stack>
                </Col>
            </Row>
            </Stack>
        </Container>
        </>
    );
}

export default Mockup;