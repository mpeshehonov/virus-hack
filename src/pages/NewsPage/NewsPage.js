import React from 'react';
import './NewsPage.scss';
import News from "../../blocks/News";
import {Container} from "react-bootstrap";

const NewsPage = () => {

    return (
        <Container fluid>
            <News />
        </Container>
    );
};

export default NewsPage;