import React, {Component} from 'react';

export default class TypeFilter extends Component {
  render() {
    return (
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
    )
  }
}