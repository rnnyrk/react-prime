import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import mockData from 'services/mockdata';

const Home = lazy(() => import('modules/Home'));

const App = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={() => <Home />} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
