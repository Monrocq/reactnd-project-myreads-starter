import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import terms from '../SEARCH_TERMS';
import BookItem from '../components/BookItem';

export class SearchScreen extends Component {
  state = {
    books: [],
    field: ''
  }
  search = field => {
    this.setState({
      field
    });
    if (field.length === 0) {
      this.setState({
        books: []
      })
    } else if (!!terms.find(term => term.toLowerCase() === field.toLowerCase())) {
      BooksAPI.search(field).then(books => this.setState({
        books
      }));
    }
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={e => this.search(e.target.value)}
              value={this.state.field}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <li key={book.id}>
                <BookItem book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchScreen
