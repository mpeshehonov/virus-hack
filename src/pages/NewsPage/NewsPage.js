import React from 'react';
import './NewsPage.scss';
import News from "../../blocks/News";
import {Layout} from 'antd';

const NewsPage = () => {

    return (
        <Layout>
            <Layout.Content>
                <News />
            </Layout.Content>
        </Layout>
    );
};

export default NewsPage;