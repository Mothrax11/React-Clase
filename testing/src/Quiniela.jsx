import React, { useContext, useState } from "react";
import { ApuestasContext } from "./ApuestasProvider";
import { Card, Button, Modal, Form, Container } from "react-bootstrap";

function Quiniela() {
    const { apuestasItem } = useContext(ApuestasContext);
    const [show, setShow] = useState(false);
    const [nuevaApuesta, setNuevaApuesta] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        //Añade de forma temporal un nuevo element al json
        const nueva = {
            fecha: formData.get("fecha"),
            jornada: formData.get("jornada"),
            partidos: [
                {
                    local: formData.get("local"),
                    visitante: formData.get("visitante"),
                    apuestas: {
                        "1": formData.get("apuesta1"),
                        "X": formData.get("apuestaX"),
                        "2": formData.get("apuesta2"),
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
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="text" name="fecha" required />
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
                            <p key={i}>
                                {partido.local} VS {partido.visitante} |  
                                1 ({partido.apuestas["1"]}) / X ({partido.apuestas["X"]}) / 2 ({partido.apuestas["2"]})
                            </p>
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
