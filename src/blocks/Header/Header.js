import React from 'react';
import './Header.scss';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <Layout.Header className="header site-layout-background">
            <div className="logo"/>
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        Главная
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/patients">
                        Пациенты
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/news">
                        Новости
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
};

export default Header;