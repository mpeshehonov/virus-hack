import React, {useState, useEffect} from 'react';
import './News.scss';
import NewsItem from "../NewsItem";
import {Space, Tabs} from 'antd';

const News = () => {
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

            <Tabs defaultActiveKey="1">
                {rubrics.map((rubric) => (
                    <Tabs.TabPane key={rubric.id} tab={rubric.title}>
                        <Space className="scrollbar">
                            {posts.filter((post) => post.rubricId === rubric.id)
                                .map((post) => (
                                    <NewsItem key={post.id} data={post}/>
                            ))}
                        </Space>
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </section>
    );
};

export default News;