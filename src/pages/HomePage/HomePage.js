import React from 'react';
import './HomePage.scss';
import {Layout} from "antd";
import HealthMetrics from '../../blocks/HealthMetrics';
import Recommends from '../../blocks/Recommends';
import Drugs from '../../blocks/Drugs';
import News from '../../blocks/News';
import Education from '../../blocks/Education';
import MobileMenu from "../../blocks/MobileMenu";
import PatientActions from "../../blocks/PatientActions";

const Homepage = () => {
    return (
        <>
            <Layout>
                <div className="hello">
                    <h1>Анастасия</h1>
                    <p>
                        Добрый день!
                    </p>
                    <PatientActions/>
                </div>
                <Layout.Content className="layout-content site-layout-background">
                    <HealthMetrics />
                    <Recommends />
                    <Drugs />
                    <News/>
                    <Education/>
                </Layout.Content>
            </Layout>
            <MobileMenu/>
        </>
    );
};

export default Homepage;