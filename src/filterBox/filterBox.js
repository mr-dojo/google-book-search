import React, { Component } from 'react';
import './filterBox.css';

export default class FilterBox extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSearch(e.target.search.value)
  }
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
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <label htmlFor="book">Book Type:</label>
          <select name="Book Type:">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </section>
    )
  }
}