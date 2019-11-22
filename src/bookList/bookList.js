import React, {Component} from 'react';
import Book from './book';
import './bookList.css';

export default class BookList extends Component {
  render() {
    const books = this.props.bookArray.map(book => {
      return (
        <Book bookData={book} />
      )
    });
    return (
      <section className="results-section">
        <ul className="results-ul">
          {books}
        </ul>
      </section>
    )
  }
}