import React, {useState, useEffect} from 'react';
import Patient from '../../blocks/Patient';

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((r) => r.json())
            .then((r) => setPatients(r));
    }, []);

    return (
        <div className="patients">
            <h1>Пациенты</h1>

            {patients.map((patient) => (
                <Patient key={patient.id} data={patient} />
            ))}
        </div>
    );
};

export default Patients;