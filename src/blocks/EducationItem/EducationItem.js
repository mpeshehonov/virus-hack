import React from 'react';
import './EducationItem.scss';
import {Card} from 'antd';

const EducationItem = (props) => {
    return (
        <Card
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src={props.data.picture} />}
        >
            <Card.Meta title={props.data.title} />
        </Card>
    );
};

export default EducationItem;