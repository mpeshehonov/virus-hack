import React, {useState, useEffect} from 'react';
import './Education.scss';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';
import EducationItem from "../EducationItem";

const Education = () => {
    const [key, setKey] = useState(1);
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

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                {cats.map((cat) => (
                    <Tab eventKey={cat.id} title={cat.title}>
                        <Row>
                            {edu.filter((eduItem) => eduItem.eduCat === cat.id)
                                .map((post) => (
                                    <Col md="2">
                                        <EducationItem key={post.id} data={post}/>
                                    </Col>
                                ))}
                        </Row>
                    </Tab>
                ))}
            </Tabs>
        </section>
    );
};

export default Education;