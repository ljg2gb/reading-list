import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div>
        <div className="hero">
            <h1 className="title">Bookshelf</h1>
            <p className="description">
                A simple way to organize your 📚
            </p>
            <Link
                to="/books"
                className="button"
                role="button"
            >
                View Bookshelf
            </Link>
        </div>
    </div>
);