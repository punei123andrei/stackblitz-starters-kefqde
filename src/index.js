import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page';
import './style.css';

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

setInterval(function () {
  root.render(<Page />);
}, 1000);
