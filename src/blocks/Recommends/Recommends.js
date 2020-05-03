import React, {useEffect, useState} from 'react';
import './Recommends.scss';
import {Row, Col, Card, Button, Figure} from 'react-bootstrap';

const Recommends = () => {
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH/recommends')
            .then((r) => r.json())
            .then((r) => setRecs(r));
    }, []);

    return (
        <section className="mt-5">
            <Row>
                <Col>
                    <h2>Рекомендации</h2>
                    <p>Персональные советы по улучшению Вашего здоровья</p>
                </Col>
            </Row>
            <Row>
                {recs.map((rec) => (
                    <Col md="2">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={rec.picture} />
                            <Card.Body>
                                <Card.Title>{rec.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Recommends;