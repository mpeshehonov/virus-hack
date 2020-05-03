import React, { useState, useEffect } from 'react';
import {useRouteMatch} from 'react-router-dom';
import Sidebar from "../../blocks/Sidebar";
import Patient from "../../blocks/Patient";
import {Row, Col} from "react-bootstrap";

const PatientPage = () => {
    const rm = useRouteMatch();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/3lement3/VH2/patients/${rm.params.id}`)
            .then((r) => r.json())
            .then((r) => setPatient(r));
    }, []);

    return (
        <section>
            <Row>
                <Sidebar />
                <Col md="9">
                    { patient &&
                        <Patient data={patient}/>
                    }
                </Col>
            </Row>
        </section>
    );
};

export default PatientPage;