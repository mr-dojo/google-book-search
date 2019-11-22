import React, {Component} from 'react';
import './book.css';

export default class Book extends Component {
  render() {
    return (
      <div className="book">
        <h2>Book Name</h2>
        <p>the Author and Price</p>
        <p>Discription</p>
      </div>
    )
  }
}