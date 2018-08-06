import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import FrontPage from './FrontPage';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    listOfBooks: []
  }

  // Update the state for the books
  updateBooks() {
    BooksAPI.getAll().then( (books) => {
      this.setState({listOfBooks: books})
    })
  }

  // Retrieve all the books from the API
  componentDidMount() {
    this.updateBooks();
  }

  // On user selecting a new dropdown option, change the designated
  // bookshelf for the book.
  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.updateBooks();
  }


  render() {

    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <FrontPage
            listOfBooks={this.state.listOfBooks}
            changeBookShelf={this.changeBookShelf}
          />
        )} />

        <Route path="/search" render={ () => (
          <SearchBook
            changeBookShelf={this.changeBookShelf}
            listOfBooks={this.state.listOfBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
