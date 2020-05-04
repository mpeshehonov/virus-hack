import React from 'react';
import { Layout, Menu, Input } from 'antd';

const AdminSidebar = () => {
    return (
        <Layout.Sider width={250} className="site-layout-background">
            <Input.Search
                className="patients-search"
                placeholder="Поиск по админке..."
                style={{ width: 250 }}
            />
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ borderRight: 0 }}
            >
                <Menu.Item key="1">База данных</Menu.Item>
                <Menu.Item key="2">Архивы</Menu.Item>
                <Menu.Item key="3">Бэкапы</Menu.Item>
                <Menu.Item key="4">Настройки</Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default AdminSidebar;