import React, {useEffect, useState} from 'react';
import './HealthMetrics.scss';
import {Row, Col, Button, Figure} from 'react-bootstrap';

const HealthMetrics = () => {
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH/health')
            .then((r) => r.json())
            .then((r) => setMetrics(r));
    }, []);

    return (
        <section className="mt-5">
            <Row>
                <Col>
                    <h2>Сегодня</h2>
                    <p>Добавьте данные о своем здоровье для получения персональных рекомендаций</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {metrics.map((metric) => (
                        <Figure>
                            <Figure.Image
                                src={metric.picture}
                                alt={metric.title}
                            />
                            <Figure.Caption>
                                {metric.title}
                            </Figure.Caption>
                        </Figure>
                    ))}
                </Col>
            </Row>
        </section>
    );
};

export default HealthMetrics;