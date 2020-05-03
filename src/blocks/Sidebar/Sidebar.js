import React from 'react';
import './Sidebar.scss';
import {Navbar, Nav, Col, ProgressBar} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <Col md="3">
            <div>
                Замените перчатки
                <ProgressBar now={90} />
            </div>
            <div>
                Замените перчатки
                <ProgressBar now={90} />
            </div>
        </Col>
    );
};

export default Sidebar;