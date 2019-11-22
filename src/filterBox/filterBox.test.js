import React from 'react';
import ReactDOM from 'react-dom';
import FilterBox from './filterBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
