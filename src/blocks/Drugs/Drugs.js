import React, {useEffect, useState} from 'react';
import './Drugs.scss';
import {Row, Col, Button, Figure} from 'react-bootstrap';

const Drugs = () => {
    const [drugs, setDrugs] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH/reception')
            .then((r) => r.json())
            .then((r) => setDrugs(r));
    }, []);

    return (
        <section className="mt-5">
            <Row>
                <Col>
                    <h2>Прием лекарств</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {drugs.map((drug) => (
                        <Figure>
                            <Figure.Image
                                src={drug.picture}
                                alt={drug.title}
                            />
                            <Figure.Caption>
                                {drug.title}
                            </Figure.Caption>
                        </Figure>
                    ))}
                </Col>
            </Row>
        </section>
    );
};

export default Drugs;