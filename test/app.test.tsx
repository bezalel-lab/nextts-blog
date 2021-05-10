import React from 'react';
import { render } from '@testing-library/react';
 
const App = require('myModule');
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});