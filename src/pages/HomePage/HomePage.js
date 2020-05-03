import React from 'react';
import './HomePage.scss';
import {Jumbotron, Container} from 'react-bootstrap';
import HealthMetrics from '../../blocks/HealthMetrics';
import Recommends from '../../blocks/Recommends';
import Drugs from '../../blocks/Drugs';
import News from '../../blocks/News';
import Education from '../../blocks/Education';

const Homepage = () => {
    return (
        <>
            <Jumbotron className="hello">
                <h1>Анастасия</h1>
                <p>
                    Добрый день!
                </p>
            </Jumbotron>
            <Container fluid>
                <HealthMetrics />
                <Recommends />
                <Drugs />
                <News/>
                <Education/>
            </Container>
        </>
    );
};

export default Homepage;