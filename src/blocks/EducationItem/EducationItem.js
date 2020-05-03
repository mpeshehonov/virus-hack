import React from 'react';
import './EducationItem.scss';
import {Card} from 'react-bootstrap';

const EducationItem = (props) => {
    return (
        <Card className="mt-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.data.picture} />
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default EducationItem;