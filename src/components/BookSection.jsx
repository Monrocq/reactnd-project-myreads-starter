import React from 'react'
import BookItem from '../components/BookItem';

function BookSection(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book, index) => (
            <li key={book.id || index}>
              <BookItem
                book={book}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookSection
