import React, {Component} from 'react';

export default class Search extends Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSearch(e.target.search.value)
  }
  
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="search">Find Books:</label>
          <input type="text" name="search" id="search" placeholder="Search Book"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}