import React, {useState, useEffect} from 'react';
import './News.scss';
import NewsItem from "../NewsItem";
import {Col, Tabs, Tab} from "react-bootstrap";

const News = () => {
    const [key, setKey] = useState(1);
    const [rubrics, setRubrics] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH/rubric')
            .then((r) => r.json())
            .then((r) => setRubrics(r));
    }, []);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH/news')
            .then((r) => r.json())
            .then((r) => setPosts(r));
    }, []);

    return (
        <section>
            <h2>Новости</h2>

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                {rubrics.map((rubric) => (
                    <Tab eventKey={rubric.id} title={rubric.title}>
                        {posts.filter((post) => post.rubricId === rubric.id)
                            .map((post) => (
                            <Col>
                                <NewsItem key={post.id} data={post}/>
                            </Col>
                        ))}
                    </Tab>
                ))}
            </Tabs>
        </section>
    );
};

export default News;