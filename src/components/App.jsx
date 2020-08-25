import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import routes from '../Routes/Routes';
import MovieLoader from './Loader/Loader';

const App = () => (
  <>
    <Nav />

    <Suspense fallback={<MovieLoader />}>
      <Switch>
        <Route
          path={routes.HOME_PAGE.path}
          component={routes.HOME_PAGE.component}
        />
        <Route
          path={routes.MOVIEDETAILS_PAGE.path}
          component={routes.MOVIEDETAILS_PAGE.component}
        />
        <Route
          path={routes.MOVIES_PAGE.path}
          component={routes.MOVIES_PAGE.component}
        />
      </Switch>
    </Suspense>
  </>
);

export default App;
