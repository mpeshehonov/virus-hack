import React from 'react';
import './PatientCardPage.scss';
import {Layout} from "antd";
import HealthMetrics from '../../blocks/HealthMetrics';
import Recommends from '../../blocks/Recommends';
import Drugs from '../../blocks/Drugs';
import News from '../../blocks/News';
import Education from '../../blocks/Education';
import MobileMenu from "../../blocks/MobileMenu";
import PatientActions from "../../blocks/PatientActions";

const PatientCardPage = () => {
    return (
        <>
            <Layout>
                <div className="hello">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.5H18V10.5H0V7.5ZM0 0H24V3H0V0ZM0 18H10.8525V15H0V18Z" fill="white"/>
                    </svg>
                    <h1>Медкарта</h1>
                    <PatientActions/>
                </div>
                <Layout.Content className="layout-content site-layout-background layout-br-top">
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

export default PatientCardPage;