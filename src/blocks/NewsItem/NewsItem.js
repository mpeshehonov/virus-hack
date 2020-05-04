import React from 'react';
import './NewsItem.scss';
import {Card} from 'antd';

const NewsItem = (props) => {
    return (
        <Card
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src={props.data.picture} />}
        >
            <Card.Meta title={props.data.title} description={props.data.body} />
        </Card>
    );
};

export default NewsItem;