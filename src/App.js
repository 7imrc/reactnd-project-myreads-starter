import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import FrontPage from './FrontPage';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {

  state = {
    listOfBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({listOfBooks: books})
    })
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then( (books) => {
      this.setState({listOfBooks: books})
    })
  }

/*
  state = {
*/
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
/*
    showSearchPage: false
  }
*/

  render() {
    //console.log(this.state.listOfBooks);

    return (
      <div className="app">
        <FrontPage
          listOfBooks={this.state.listOfBooks}
          changeBookShelf={this.changeBookShelf}
        />
      {/*<SearchBook />*/}
      </div>
    )
  }
}

export default BooksApp
