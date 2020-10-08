import React from 'react';

export default class BookPage extends React.Component {
    state = {
        book: {}
    }
    
    componentDidMount = () => {
        const { id } = this.props.match.params
        const url = `/books/${id}`
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network response was not ok")
            })
            .then(result => this.setState({book: result}))
            .catch(() => this.props.history.push('/bookshelf'));
    }

    deleteBook = () => {
        const { id } = this.props.match.params
        const url = `/books/${id}`
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network is not responding")
            })
            .then(() => this.props.history.push("/bookshelf"))
            .catch(error => console.log(error.message))
    }

    render() {
        const {title, author} = this.state.book
        return(
            <div className='hero'>
                <div className='book-cover'>
                    <h1>{title}</h1>
                    <h3>{author}</h3>
                </div>
                <p className="button" onClick={this.deleteBook}>
                    Delete Book
                </p>
            </div>
        ) 
    }
}
