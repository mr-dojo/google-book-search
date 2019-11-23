import React, { Component } from 'react';
import './filterBox.css';

export default class FilterBox extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSearch(e.target.search.value)
  }

  handleBookTypeFilter(e) {
    const data = this.props.booksData
    const filteredData = data.filter(book => {
      if (e.target.value === "All") {
        return book
      } else if (book.volumeInfo.categories[0] === e.target.value) {
        return book
      } else {
        return null
      }
    });
    this.props.handleFilter(filteredData)
  }

  findPrintTypes(booksData) {
    const printTypes = booksData.map(book => book.volumeInfo.printType)
    const uniquePrintTypes = Array.from(new Set(printTypes))
    return uniquePrintTypes.map((type, i) => 
      <option key={i} value={type}>{type}</option>
    )
  };

  findBookTypes(booksData) {
    const bookTypeObjs = booksData.map((book) => {
      return book.volumeInfo.categories
      });
    const bookTypes = bookTypeObjs.map(book => book[0])
    const uniqueBookTypes = Array.from(new Set(bookTypes))
    return uniqueBookTypes.map((type, i) =>
      <option key={i} value={type}>{type}</option>
    )
  };

  render() {
    return (
      <section className="filter-box">
        <div className="search-bar">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="search">Find Books:</label>
            <input type="text" name="search" id="search" placeholder="Search Book"></input>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="type-filter">
          <label htmlFor="print">Print Type:</label>
          <select name="print">
            <option key="all" value="All">All</option>
            {this.findPrintTypes(this.props.booksData)}
          </select>
          <label htmlFor="book">Book Type:</label>
          <select onChange={e => this.handleBookTypeFilter(e)} name="Book Type:">
            <option key="all" value="All">All</option>
            {this.findBookTypes(this.props.booksData)}
          </select>
        </div>
      </section>
    )
  }
}