import React, { Component } from 'react';
import FloatingActionBtn from '../components/FloatingActionBtn';
import HomeBar from '../components/header/HomeBar';
import * as BooksAPI from '../utils/BooksAPI';
import BookSection from '../components/BookSection';
import * as initalData from '../utils/initial_data';

const CURRENTLY_READING = "currentlyReading";
const WANT_TO_READ = "wantToRead";
const READ = "read";

export class HomeScreen extends Component {
  state = {
    CURRENTLY_READING: initalData.CURRENTLY_READING,
    WANT_TO_READ: initalData.WANT_TO_READ,
    READ: initalData.READ
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        CURRENTLY_READING: [],
        WANT_TO_READ: [],
        READ: []
      });
      books.forEach(book => this.setState(previousState => {
        switch(book.shelf) {
          case CURRENTLY_READING: {
            return {
              CURRENTLY_READING: previousState.CURRENTLY_READING.concat(book)
            };
          }
          case WANT_TO_READ: {
            return {
              WANT_TO_READ: previousState.WANT_TO_READ.concat(book)
            };
          }
          case READ: {
            return {
              READ: previousState.READ.concat(book)
            };
          }
          default: {
            return {}
          }
        }
      }));
    });
  }
  render() {
    return (
      <div className="list-books">
        <HomeBar />
        <div className="list-books-content">
          <div>
            <BookSection
              title="Currently Reading"
              books={this.state.CURRENTLY_READING}
            />
            <BookSection
              title="Want to Read"
              books={this.state.WANT_TO_READ}
            />
            <BookSection
              title="Read"
              books={this.state.READ}
            />
          </div>
        </div>
        <FloatingActionBtn />
      </div>
    )
  }
}

export default HomeScreen;
