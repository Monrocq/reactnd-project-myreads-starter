import React from 'react';
import {update} from '../../utils/BooksAPI';
import { useNavigate, useLocation } from "react-router-dom";

export function SelectBtn(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const updateBook = newShelf => {
    if (newShelf !== props.shelf) {
      update({id: props.id}, newShelf.target.value).then(res => {
        console.log(res);
        location.pathname === "/" ? window.location.reload() : navigate("/")
      });
    }
  }
  return (
    <div className="book-shelf-changer">
      <select onChange={value => updateBook(value)} value={props.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default SelectBtn
