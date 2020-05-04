import React, {useState, useEffect} from 'react';
import './Education.scss';
import { Space, Tabs } from 'antd';
import EducationItem from "../EducationItem";

const Education = () => {
    const [cats, setCats] = useState([]);
    const [edu, setEdu] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH1/eduCategory')
            .then((r) => r.json())
            .then((r) => setCats(r));
    }, []);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH1/education')
            .then((r) => r.json())
            .then((r) => setEdu(r));
    }, []);


    return (
        <section>
            <h2>Образование</h2>
            <p>Проверь свои знания о здоровье</p>

            <Tabs defaultActiveKey="1">
                {cats.map((cat) => (
                    <Tabs.TabPane key={cat.id} tab={cat.title}>
                        <Space className="scrollbar">
                            {edu.filter((eduItem) => eduItem.eduCat === cat.id)
                                .map((post) => (
                                    <EducationItem key={post.id} data={post}/>
                                ))}
                        </Space>
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </section>
    );
};

export default Education;