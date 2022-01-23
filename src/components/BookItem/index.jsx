import React from 'react'
import SelectBtn from './SelectBtn'

function BookItem({book}) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ 
          width: 128, 
          height: 193, 
          backgroundImage: `url("${
            book.coverURL || (book.imageLinks && book.imageLinks.thumbnail) || ''
          }")` 
        }}></div>
        <SelectBtn id={book.id} shelf={book.shelf || 'none'} />
      </div>
      <div className="book-title">{ book.title }</div>
      <div className="book-authors">{ book.authors }</div>
    </div>
  )
}

export default BookItem
