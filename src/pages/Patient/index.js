import React, { useState, useEffect } from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const Patient = () => {
    const rm = useRouteMatch();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${rm.params.id}`)
            .then((r) => r.json())
            .then((r) => setPatient(r));
    }, []);

    return (
        <div className="patient">
            { patient &&
            <div className="user-card">
                <h1>{patient.name}</h1>
                <p>
                    Email:
                    &nbsp;
                    <a href={`emailto:${patient.email}`}>{patient.email}</a>
                </p>
                <p>
                    Phone:
                    &nbsp;
                    <a href={`tel:${patient.phone}`}>{patient.phone}</a>
                </p>
                <Link to="/">Назад</Link>
            </div>
            }
        </div>
    );
};

export default Patient;