import React, { Component } from 'react';
import Search from './search';
import TypeFilter from './typeFilter';
import './filterBox.css';

export default class FilterBox extends Component {
  render() {
    return (
      <section className="filter-box">
        <Search />
        <TypeFilter />
      </section>
    )
  }
}