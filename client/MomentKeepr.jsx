import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('content')
);


// document.addEventListener('DOMContentLoaded', () => {
//   const preloadedState = localStorage.state ?
//     JSON.parse(localStorage.state) : {};
//   const store = configureStore(preloadedState);
//
//   const root = document.getElementById('content');
//   ReactDOM.render(<Root store={store} />, root);
// });
