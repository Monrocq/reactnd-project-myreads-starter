import React, { Component } from 'react';
import FloatingActionBtn from '../components/FloatingActionBtn';
import HomeBar from '../components/header/HomeBar';

import BookSection from '../components/BookSection';
//import * as initalData from '../utils/initial_data';

export class HomeScreen extends Component {
  render() {
    let {CURRENTLY_READING, WANT_TO_READ, READ} = this.props.books;
    return (
      <div className="list-books">
        <HomeBar title="MyReads" />
        {CURRENTLY_READING || WANT_TO_READ || READ  ? (
          <div className="list-books-content">
            <div>
              <BookSection
                title="Currently Reading"
                books={CURRENTLY_READING}
              />
              <BookSection
                title="Want to Read"
                books={WANT_TO_READ}
              />
              <BookSection
                title="Read"
                books={READ}
              />
            </div>
          </div>
        ) : (
          <p style={{
            textAlign: 'center'
          }}>Loading books...</p>
        )}
        <FloatingActionBtn />
      </div>
    )
  }
}

export default HomeScreen;
