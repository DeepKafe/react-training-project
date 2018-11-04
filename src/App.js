import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ShowData from './components/testComponent/showData';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/data" component={ShowData} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div >
        );
    }
}

export default App;
