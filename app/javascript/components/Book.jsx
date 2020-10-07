import React from 'react';
import { Link } from 'react-router-dom';

export default function Book({title, author, id}) {
    return(
        <Link
            to={`/bookPage/${id}`}
            // className="button"
            // role="button"
        >
            <div className="book">
                <h3>{title}</h3>
                <p>{author}</p>
            </div>
        </Link>
    )
}