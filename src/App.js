import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import AdminPage from './pages/AdminPage';
import PatientPage from './pages/PatientPage';
import RecordPage from './pages/RecordPage';
import Patients from './pages/Patients';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import EducationPage from './pages/EducationPage';
import PatientCardPage from './pages/PatientCardPage';
import Notfound from './pages/Notfound';

const App = () => {

    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/admin/" component={AdminPage}/>
                        <Route path="/record/:id" component={RecordPage}/>
                        <Route path="/patients/:id" component={PatientPage}/>
                        <Route path="/patients/" component={Patients}/>
                        <Route path="/news/" component={NewsPage}/>
                        <Route path="/edu/" component={EducationPage}/>
                        <Route path="/card/" component={PatientCardPage}/>
                        <Route path="/" component={HomePage}/>
                        <Route component={Notfound}/>
                    </Switch>
                </Layout>
            </Router>
        </>
    );
}

export default App;
