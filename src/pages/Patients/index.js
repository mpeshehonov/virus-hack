import React, {useState, useEffect} from 'react';
import Patient from '../../blocks/Patient';
import {Row, Col, Container} from "react-bootstrap";

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH2/patients/')
            .then((r) => r.json())
            .then((r) => setPatients(r));
    }, []);

    return (
        <Container fluid>
            <section>
                <h1>Пациенты</h1>
                <Row>
                    {patients.map((patient) => (
                        <Col md="2">
                            <Patient key={patient.id} data={patient} />
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    );
};

export default Patients;