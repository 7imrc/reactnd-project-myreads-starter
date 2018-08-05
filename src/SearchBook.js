import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookInfo from './BookInfo';
import escapeRegExp from 'escape-string-regexp';
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
        if(searchedBook.error) {
          console.log("ERROR");
          console.log(searchedBook.error);
          console.log(searchedBook);
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

    //console.log(this.state.bookSearch);
    //console.log(BooksAPI.search('education'));
    //console.log(BooksAPI.search('emile'));

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
                .map( (searchedBook) => (
                  <li key={searchedBook.id}>
                    <BookInfo
                      book={searchedBook}
                      />
                      </li>
                ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook;
