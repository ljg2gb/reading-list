import React from 'react';

export default function Book({title, author}) {
    console.log("hi")
    return(
        <div className="book">
            <p>{title}</p>
            <p>{author}</p>
        </div>
    )
}