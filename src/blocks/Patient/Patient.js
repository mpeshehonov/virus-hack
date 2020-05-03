import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Patient = (props) => {
    const patient = props.data;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={patient.img} />
            <Card.Body>
                <Card.Title>{patient.firstName} {patient.lastName}</Card.Title>
                <Card.Link>
                    <Link to={`/patients/${patient.id}`}>
                        Перейти
                    </Link>
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Patient;