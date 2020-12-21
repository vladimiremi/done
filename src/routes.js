import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Logon from './pages/Logon';
import Register from './pages/Register';
import User from './pages/User';
import NewAdvertisement from './pages/NewAdvertisement';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/logon" component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/user" component={User} />
                <Route path="/newadvertisement" component={NewAdvertisement} />
            </Switch>
        </BrowserRouter>
    );
}