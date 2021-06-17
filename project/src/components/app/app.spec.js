import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AppRoute } from '../../consts';

describe('App', () => {
  it('renders App component', () => {
    const history = createMemoryHistory();
    const placesCount = 312;
    history.push(AppRoute.SIGN_IN);
    render(
      <Router history={history} >
        <App placesCount={placesCount}/>
      </Router>);
  });
});

describe('Test routing', () => {
  it('Render MainScreen when user navigate to "/" url', () => {
    const history = createMemoryHistory();
    const placesCount = 312;

    history.push(AppRoute.MAIN);

    render(
      <Router history={history} >
        <App placesCount={placesCount}/>
      </Router>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });

  it('Render SignInScreen when user navigate to "/login" url', () => {
    const history = createMemoryHistory();
    const placesCount = 312;

    history.push(AppRoute.SIGN_IN);

    render(
      <Router history={history} >
        <App placesCount={placesCount}/>
      </Router>);

    expect(screen.getAllByText(/sign in/i)[0]).toBeInTheDocument();
  });

  it('Render FavoritesScreen when user navigate to "/favorites" url', () => {
    const history = createMemoryHistory();
    const placesCount = 312;

    history.push(AppRoute.FAVORITES);

    render(
      <Router history={history} >
        <App placesCount={placesCount}/>
      </Router>);
  });

  it('Render RoomScreen when user navigate to "/offer/:id" url', () => {
    const history = createMemoryHistory();
    const placesCount = 312;

    history.push(AppRoute.ROOM);

    render(
      <Router history={history} >
        <App placesCount={placesCount}/>
      </Router>);
  });

  it('Render NotFoundScreen when user navigate to "/non-existent" route', () => {
    const history = createMemoryHistory();
    const placesCount = 312;

    history.push(AppRoute.NOT_FOUND);

    render(
      <Router history={history} >
        <App placesCount={placesCount}/>
      </Router>);

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Go back to the main page/i)).toBeInTheDocument();
  });
});
