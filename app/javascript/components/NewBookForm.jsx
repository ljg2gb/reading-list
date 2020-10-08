import React from 'react';

export default class NewBookForm extends React.Component {
    state = {
        title: '',
        author: '',
        status: ''
    }

    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(state)
    }

    onSubmit(event) {
        event.preventDefault();
        const url = 'books'
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Network had trouble, try again.")
        })
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    }

    render() {
        const { title, author, status } = this.state;
        return(
            <div>
                <h1>Add a Book</h1>
                <form onSubmit={this.onSubmit}>
                    <label for="title">Title  </label><br/>
                    <input type="text" id="title" name="title" value={title} onChange={this.onChange} /><br/>

                    <label for="author">Author </label><br/>
                    <input type="text" id="author" name="author" value={author} onChange={this.onChange} /><br/>

                    <label for="read">Read </label>
                    <input type="radio" id="read" name="status" value="Read" onChange={this.onChange} /><br/>

                    <label for="wantToRead">Want to Read </label>
                    <input type="radio" id="wantToRead" name="status" value="Want to Read" onChange={this.onChange} /><br/>

                    <label for="reading">Reading </label>
                    <input type="radio" id='reading' name='status' value="Reading" onChange={this.onChange} /><br/>

                    <input type="submit" value="add book"/>

                </form>
            </div>
        )
    }
}