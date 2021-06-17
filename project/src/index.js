import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppElement } from './consts';
import App from './components/app/app';

const placesCount = 312;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App placesCount={placesCount} />
    </BrowserRouter>
  </React.StrictMode>,
  AppElement.ROOT,
);
