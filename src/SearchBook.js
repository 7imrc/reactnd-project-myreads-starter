import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookInfo from './BookInfo';
import { Link } from 'react-router-dom';

class SearchBook extends Component {

  state = {
        query: '',
        bookSearch: []
    }

  // Updates the state with reference to what is typed in the search bar.
  updateQuery = (query) => {
    this.setState({ query: query })
    this.searchedForBooks(query);
  }

  // Search the list of books against the input search query.
  searchedForBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then( (searchedBook) => {
        // If the entered search term provides an error, then return nothing.
        // Otherwise, return the matched books.
        if(searchedBook.error) {
          this.setState({ bookSearch: [] });
        } else {
          this.setState({ bookSearch: searchedBook });
        }
      });
    } else {
      this.setState({ bookSearch: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.bookSearch
              .map( (searchedBook) => {
                /* Display the books matching the search term.  In addition, detemine if
                 * the searched book has an existing allocated bookshelf and display
                 * that bookshelf by default.
                 */
                let bookShelf = 'none';

                this.props.listOfBooks.filter(book => book.id === searchedBook.id)
                 .map(book => {bookShelf = book.shelf});

                  return (
                    <li key={searchedBook.id}>
                      <BookInfo
                        book={searchedBook}
                        changeBookShelf={this.props.changeBookShelf}
                        shelf={bookShelf}
                        />
                    </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook;
