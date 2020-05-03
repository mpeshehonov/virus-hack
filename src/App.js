import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'holderjs';
import Header from './blocks/Header';
import AdminPage from './pages/AdminPage';
import PatientPage from './pages/PatientPage';
import Patients from './pages/Patients';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import EducationPage from './pages/EducationPage';
import Notfound from './pages/Notfound';
import MobileMenu from "./blocks/MobileMenu";

const App = () => {

    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/admin/" component={AdminPage}/>
                    <Route path="/patients/:id" component={PatientPage}/>
                    <Route path="/patients/" component={Patients}/>
                    <Route path="/news/" component={NewsPage}/>
                    <Route path="/edu/" component={EducationPage}/>
                    <Route path="/" component={HomePage}/>
                    <Route component={Notfound}/>
                </Switch>
                <MobileMenu/>
            </Router>
        </>
    );
}

export default App;
