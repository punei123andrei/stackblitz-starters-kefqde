import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page';
import './style.css';

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

root.render(<Page />);
