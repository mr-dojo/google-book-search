import React from 'react';
import FilterBox from './filterBox/filterBox';
import BookList from './bookList/bookList';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false,
      query: 'Science'
    }
  }

   componentDidMount() {
    const query = this.state.query
    const APIkey = 'AIzaSyBGdKu7x3YcbexK45zPqbHg5MCbtvBkIdM'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIkey}`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          showBooks: true,
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    
    const listOfBooks = this.state.showBooks 
      ? <BookList books={this.state.books} /> : null
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <FilterBox books={this.state.books}/>
        {listOfBooks}
      </div>
    );
  }
}
