import React, {useEffect, useState} from 'react';
import './Recommends.scss';
import { Space, Card } from 'antd';

const Recommends = () => {
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH/recommends')
            .then((r) => r.json())
            .then((r) => setRecs(r));
    }, []);

    return (
        <section>
            <h2>Рекомендации</h2>
            <p>Персональные советы по улучшению Вашего здоровья</p>
            <Space>
                {recs.map((rec) => (
                    <Card
                        bordered={false}
                        style={{ width: 240 }}
                        cover={<img alt="example" src={rec.picture} />}
                    >
                        <Card.Meta title={rec.title} />
                    </Card>
                ))}
            </Space>
        </section>
    );
};

export default Recommends;