import React from 'react';
import Book from '../components/Book';

export default class Bookshelf extends React.Component {
    state = {
        books: []
    }

    componentDidMount = () => {
        const url = '/books'
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network response was not okay")
            })
            .then(result => this.setState({books: result}))
            .catch(() => this.props.history.push('/'));
    }

    displayBooks = (booklist) => {
         return booklist.map(book => <Book key={book.id} id={book.id} title={book.title} author={book.author}></Book> )
    }

    render() {
        const { books } = this.state;
        const read = books.filter(book => book.status == "Read" )
        const wantToRead = books.filter(book => book.status == "Want to Read" )
        const reading = books.filter(book => book.status == "Reading" )

        return(
            <div className='hero'>
                <h1>My Bookshelf</h1>
                <div className='bookshelf'>
                    <p>reading</p>
                    <div className='shelf'>
                        {this.displayBooks(reading)}
                    </div>
                    <p>want to read</p>
                    <div className='shelf'>
                        {this.displayBooks(wantToRead)}
                    </div>
                    <p>read</p>
                    <div className='shelf'>
                        {this.displayBooks(read)}
                    </div>
                </div>
            </div>
        )
    }
}