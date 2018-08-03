import React, { Component } from 'react';

class BookInfo extends React.Component {

  constructor(props) {
      super(props);

      // This binding is necessary to make `this` work in the callback
      this.handleChange = this.handleChange.bind(this);
  }


  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select
              value={this.props.book.shelf}
              onChange={this.handleChange}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }

  // Function to change the designated bookshelf for the book, when selected
  handleChange(event) {
    console.log(event.target.value, this.props.book);

    this.props.changeBookShelf(this.props.book, event.target.value);
  }

}

export default BookInfo;
