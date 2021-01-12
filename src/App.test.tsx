import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

/** 
 this test is not failing locally but on build it is, it is not updating
**/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
});
