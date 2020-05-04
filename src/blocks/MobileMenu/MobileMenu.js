import React from 'react';
import {Link} from "react-router-dom";
import './MobileMenu.scss';
import { Menu, Affix } from 'antd';

const MobileMenu = () => {
    return (
        <Affix style={{ position: 'fixed', bottom: 0 }}>
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
        </Affix>
    );
};

export default MobileMenu;