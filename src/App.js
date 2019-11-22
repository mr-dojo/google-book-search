import React from 'react';
import FilterBox from './filterBox/filterBox';
import BookList from './bookList/bookList';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <FilterBox />
        <BookList />
      </div>
    );
  }
}
