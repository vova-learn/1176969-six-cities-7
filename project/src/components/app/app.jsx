import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import { Route, Switch } from 'react-router';
import { AppRoute } from '../../consts';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
function App({placesCount}) {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainScreen placesCount={placesCount} />
      </Route>
      <Route exact path={AppRoute.SIGN_IN}>
        <SignInScreen />
      </Route>
      <Route exact path={AppRoute.FAVORITES}>
        <FavoritesScreen />
      </Route>
      <Route exact path={AppRoute.ROOM}>
        <RoomScreen />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
