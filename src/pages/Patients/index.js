import React, {useState, useEffect} from 'react';
import { Layout, Table } from 'antd';
import Sidebar from "../../blocks/Sidebar";
import {Link} from 'react-router-dom';
import Header from "../../blocks/Header";


const Patients = () => {
    const [patients, setPatients] = useState([]);
    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            render: text => <Link to={`/patients/${text}`}>Перейти</Link>
        },
        {
            title: 'Имя',
            dataIndex: 'firstName'
        },
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'mail'
        }
    ];

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/3lement3/VH2/patients/')
            .then((r) => r.json())
            .then((r) => setPatients(r));
    }, []);

    return (
        <>
            <Header/>
            <Layout>
                <Sidebar />
                <Layout.Content className="layout-content">
                    <section>
                        <h1>Пациенты</h1>
                        <Table
                            columns={columns}
                            dataSource={patients}
                        />
                    </section>
                </Layout.Content>
            </Layout>
        </>
    );
};

export default Patients;