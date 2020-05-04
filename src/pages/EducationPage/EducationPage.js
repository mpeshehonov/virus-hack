import React from 'react';
import './EducationPage.scss';
import {Layout} from 'antd';
import Education from "../../blocks/Education";

const EducationPage = () => {

    return (
        <Layout>
            <Layout.Content>
                <Education />
            </Layout.Content>
        </Layout>
    );
};

export default EducationPage;