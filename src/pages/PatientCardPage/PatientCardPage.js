import React from 'react';
import './PatientCardPage.scss';
import {Layout} from "antd";
import MobileMenu from "../../blocks/MobileMenu";
import MetricsWidget from "../../blocks/MetricsWidget";
import MetricsGraphWidget from "../../blocks/MetricsGraphWidget";
import DynamicWidget from "../../blocks/DynamicWidget";
import Records from "../../blocks/Records/Records";
import HealingCourse from "../../blocks/HealingCourse";
import RecommendsForecast from "../../blocks/RecommendsForecast";

const PatientCardPage = () => {
    return (
        <>
            <Layout>
                <div className="hello">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.5H18V10.5H0V7.5ZM0 0H24V3H0V0ZM0 18H10.8525V15H0V18Z" fill="white"/>
                    </svg>
                    <h1>Медкарта</h1>
                    <MetricsWidget/>
                </div>
                <Layout.Content className="layout-content site-layout-background layout-br-top">
                    <MetricsGraphWidget />
                    <DynamicWidget/>
                    <Records/>
                    <HealingCourse/>
                    <RecommendsForecast/>
                </Layout.Content>
            </Layout>
            <MobileMenu/>
        </>
    );
};

export default PatientCardPage;