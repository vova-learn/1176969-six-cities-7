import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { AppElement } from './consts';

const placesCount = 312;

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={placesCount} />
  </React.StrictMode>,
  AppElement.ROOT,
);
