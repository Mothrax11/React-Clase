import React, { useContext, useState, useEffect } from "react";
import { ApuestasContext } from "./ApuestasProvider";
import { Card, Button, Modal, Form, Container } from "react-bootstrap";

function Quiniela() {
    const [apuestasItem, setApuestasItem] = useState([]);
    const [show, setShow] = useState(false);
    const [nuevaApuesta, setNuevaApuesta] = useState(null);


    const cargarApuesta = (data) => {
            const aux_data = [];
            let i = 0;
            for (i = 0; i < data.length; i++) {
                let aux_element = data[i];
                aux_element["id"] = i;
                aux_data.push(aux_element);
            }
            setApuestasItem(aux_data);
        };
    
        const fetchApuestas = async () => {
            const response = await fetch('quinielas.json');
            const data = await response.json();
            cargarApuesta(data.apuestas);
        };
    
        useEffect(() => {
            fetchApuestas();
        }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const datosApuesta = new FormData(e.target);
        const nueva = {
            fecha: datosApuesta.get("fecha"),
            jornada: datosApuesta.get("jornada"),
            partidos: [
                {
                    local: datosApuesta.get("local"),
                    visitante: datosApuesta.get("visitante"),
                    apuestas: {
                        "1": datosApuesta.get("apuesta1"),
                        "X": datosApuesta.get("apuestaX"),
                        "2": datosApuesta.get("apuesta2"),
                    },
                },
            ],
        };
        setNuevaApuesta(nueva);
        handleClose();
    };

    return (
        <Container>
            <Button variant="primary" onClick={handleShow}>
                Nueva Apuesta
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva Apuesta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="fecha">Fecha</Form.Label>
                            <Form.Control type="date" name="fecha" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Jornada</Form.Label>
                            <Form.Control type="number" name="jornada" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Equipo Local</Form.Label>
                            <Form.Control type="text" name="local" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Equipo Visitante</Form.Label>
                            <Form.Control type="text" name="visitante" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Apuesta 1</Form.Label>
                            <Form.Control type="number" name="apuesta1" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Apuesta X</Form.Label>
                            <Form.Control type="number" name="apuestaX" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Apuesta 2</Form.Label>
                            <Form.Control type="number" name="apuesta2" required />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Guardar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <div>
                {apuestasItem.map((apuesta, index) => (
                    <Card key={index}>
                        <p>{apuesta.fecha}</p>
                        <p>{apuesta.jornada}</p>
                        {apuesta.partidos.map((partido, i) => (
                            <Card key={i}>
                                <p>{apuesta.fecha}</p>
                                <p>{apuesta.jornada}</p>
                                {partido.local} VS {partido.visitante} |  
                                1 ({partido.apuestas["1"]}) / X ({partido.apuestas["X"]}) / 2 ({partido.apuestas["2"]})
                            </Card>
                        ))}
                    </Card>
                ))}

                {nuevaApuesta && (
                    <Card>
                        <p>{nuevaApuesta.fecha}</p>
                        <p>{nuevaApuesta.jornada}</p>
                        {nuevaApuesta.partidos.map((partido, i) => (
                            <p key={i}>
                                {partido.local} VS {partido.visitante} |  
                                1 ({partido.apuestas["1"]}) / X ({partido.apuestas["X"]}) / 2 ({partido.apuestas["2"]})
                            </p>
                        ))}
                    </Card>
                )}
            </div>
        </Container>
    );
}

export default Quiniela;
