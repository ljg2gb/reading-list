import React from 'react'
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom'
import Home from '../components/Home'


export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </Router>
)