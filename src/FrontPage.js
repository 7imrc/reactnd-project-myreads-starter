import React, { Component } from 'react';
import BookInfo from './BookInfo';
class FrontPage extends Component {
  render() {
      console.log(this.props.listOfBooks);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.listOfBooks
                      .filter( (book) => book.shelf === 'currentlyReading')
                        .map( (book) => (
                          <li key={book.id}>
                            <BookInfo />
                          </li>
                        ))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <BookInfo />
                  </li>
                  <li>
                    <BookInfo />
                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <BookInfo />
                  </li>
                  <li>
                    <BookInfo />
                  </li>
                  <li>
                    <BookInfo />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    );
  }


}

export default FrontPage;
