import React from 'react';
import './Sidebar.scss';
import { Layout, Menu, Progress, Badge, Input } from 'antd';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <Layout.Sider width={200} className="site-layout-background">
            <div className="timers">
                <div className="timer">
                    <p>Замена перчаток через</p>
                    <Progress type="circle" percent={75} format={percent => `${Math.round(100/percent)} мин.`} />
                </div>
                <div className="timer">
                    <p>Кварцевание кабинета через</p>
                    <Progress type="circle" percent={25} format={percent => `${percent} мин.`} />
                </div>
            </div>

            <Input.Search
                className="patients-search"
                placeholder="Поиск пациентов"
                style={{ width: 200 }}
            />

            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1">Текущий пациент</Menu.Item>
                <Menu.Item key="2">Другой пациент</Menu.Item>
                <Menu.Item key="3">Другой пациент</Menu.Item>
                <Menu.Item key="4">Другой пациент</Menu.Item>
                <Menu.Item key="5">Другой пациент</Menu.Item>
                <Menu.Item key="6">Другой пациент</Menu.Item>
                <Menu.Item key="7">Другой пациент</Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default Sidebar;