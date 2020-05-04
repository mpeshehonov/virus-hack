import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

const Patient = (props) => {
    const patient = props.data;

    return (
        <Card
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src={patient.img} />}
        >
            <Card.Meta title={patient.firstName + ' ' + patient.lastName}
                       description={<Link to={`/patients/${patient.id}`}>Перейти</Link>}
            />
        </Card>
    );
};

export default Patient;