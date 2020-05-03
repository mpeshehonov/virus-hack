import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MobileMenu.scss';

const MobileMenu = () => {
    return (
        <Navbar className="d-md-none" fixed="bottom" bg="light" variant="light">
            <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/">
                        Главная
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="#">
                        Обучение
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="#">
                        Профиль
                    </Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default MobileMenu;