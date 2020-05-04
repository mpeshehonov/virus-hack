import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Sidebar from "../../blocks/Sidebar";
import Patient from "../../blocks/Patient";
import {Layout} from "antd";
import Header from "../../blocks/Header";

const PatientPage = () => {
    const rm = useRouteMatch();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/3lement3/VH2/patients/${rm.params.id}`)
            .then((r) => r.json())
            .then((r) => setPatient(r));
    }, []);

    return (
        <>
            <Header/>
            <Layout>
                <Sidebar />
                <Layout.Content className="layout-content">
                    { patient &&
                        <Patient data={patient}/>
                    }
                </Layout.Content>
            </Layout>
        </>
    );
};

export default PatientPage;