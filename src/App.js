import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import {Routes, Route} from 'react-router-dom'
import NoMatchPage from './screens/NoMatchPage'

class BooksApp extends React.Component {
  //state defined on "undefined" to allow displaying "Loading Books..." on UI
  state = {
    CURRENTLY_READING: undefined,
    WANT_TO_READ: undefined,
    READ: undefined,
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      let CURRENTLY_READING = [];
      let WANT_TO_READ = [];
      let READ = [];
      books.forEach(book => {
        switch(book.shelf) {
          case "currentlyReading": {
            CURRENTLY_READING.push(book);
            break;
          }
          case "wantToRead": {
            WANT_TO_READ.push(book);
            break;
          }
          case "read": {
            READ.push(book);
            break;
          }
          default: {
            break;
          }
        }
      });
      this.setState({
        CURRENTLY_READING,
        WANT_TO_READ,
        READ
      })
    });
  }
  render() {
    let {CURRENTLY_READING, WANT_TO_READ, READ} = this.state;
    return (
      <div className="app">
        <Routes>
          <Route exact path='/' element={<HomeScreen books={this.state} />}/>
          <Route path='/search' element={<SearchScreen booksFromMain={[...CURRENTLY_READING || [], ...WANT_TO_READ || [], ...READ || []]} />}/>
          <Route path='*' element={<NoMatchPage />}/>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
