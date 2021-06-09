import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { AppElement } from './consts';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  AppElement.ROOT,
);
