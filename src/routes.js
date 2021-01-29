import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Logon from './pages/Logon';
import Register from './pages/Register';
import User from './pages/User';
import NewAdvertisement from './pages/NewAdvertisement';
import Contact from './pages/Contact';
import Sold from './pages/Sold';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/logon" component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/user" component={User} />
                <Route path="/sold" component={Sold} />
                <Route path="/newadvertisement" component={NewAdvertisement} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}