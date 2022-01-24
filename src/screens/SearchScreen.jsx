import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import terms from '../SEARCH_TERMS';
import BookItem from '../components/BookItem';
import {DebounceInput} from 'react-debounce-input';

export class SearchScreen extends Component {
  state = {
    books: []
  }
  search = field => {
    if (field.length === 0) {
      this.setState({
        books: []
      })
    } else if (!!terms.find(term => term.toLowerCase() === field.toLowerCase())) {
      BooksAPI.search(field).then(booksFetched => {
        let books = booksFetched.map(book => {
          const bookShelf = this.props.booksFromMain.find((b) => b.id === book.id);
          return { ...book, shelf: bookShelf ? bookShelf.shelf : 'none' };
        });
        this.setState({
          books
        })
      });
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
            <DebounceInput 
              type="text" 
              placeholder="Search by title or author"
              onChange={e => this.search(e.target.value)}
              debounceTimeout={500}
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
