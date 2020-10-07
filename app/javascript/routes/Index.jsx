import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Bookshelf from "../pages/Bookshelf"

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bookshelf" exact component={Bookshelf} />
        </Switch>
    </Router>
)