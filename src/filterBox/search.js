import React, {Component} from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <label htmlFor="search">Find Books:</label>
          <input type="text" name="search" id="search" placeholder="Search Book" value=""></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}