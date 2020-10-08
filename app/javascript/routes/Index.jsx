import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Bookshelf from "../pages/Bookshelf"
import BookPage from "../pages/BookPage"
import NewBook from "../pages/NewBook"

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bookshelf" exact component={Bookshelf} />
            <Route path="/bookPage/:id" exact component={BookPage} />
            <Route path="/newBook" exact component={NewBook} />
        </Switch>
    </Router>
)