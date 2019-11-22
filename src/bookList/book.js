import React, {Component} from 'react';
import './book.css';

export default class Book extends Component {

  checkPrice(saleInfo) {
    if (saleInfo.saleability === "FOR_SALE") {
      return `${saleInfo.listPrice.amount} in ${saleInfo.listPrice.currencyCode}`
    } else if (saleInfo.saleability === "NOT_FOR_SALE") {
      return "Not For Sale"
    } else if (saleInfo.saleability === "FREE") {
      return "Free!"
    }
  }

  render() {

    const authors = this.props.bookData.volumeInfo.authors.map(author => author)

    return (
      <li className="book-li">
        <h2>{this.props.bookData.volumeInfo.title}</h2>
        <div className="book-container">
          <img src={this.props.bookData.volumeInfo.imageLinks.thumbnail} alt={this.props.bookData.volumeInfo.title}/>
          <div className="book-info">
            <p>Author: {authors} </p>
            <p>Price: {this.checkPrice(this.props.bookData.saleInfo)}</p>
            <p>{this.props.bookData.volumeInfo.description}</p>
          </div>
        </div>
      </li>
    )
  }
}