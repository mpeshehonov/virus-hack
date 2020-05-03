import React from 'react';
import './NewsItem.scss';
import {Card} from 'react-bootstrap';

const NewsItem = (props) => {
    return (
        <Card className="mt-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.data.picture} />
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text>
                    {props.data.body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NewsItem;