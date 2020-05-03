import React from 'react';
import './Header.scss';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Navbar className="d-none d-md-flex" bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        alt="myhealth"
                        src="holder.js/30px30"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    myhealth
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/">
                            Главная
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/patients">
                            Пациенты
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/news">
                            Новости
                        </Link>
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="#login">Константин петров</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;