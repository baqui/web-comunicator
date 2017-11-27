import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from '../Store';

import { ProfilePage } from '../pages/profile/ProfilePage';
import { MarketplaceLayout } from '../layouts/MarketplaceLayout';

const app_container = document.getElementById('app');

render ((
  <Provider store={store}>
    <BrowserRouter>
      <MarketplaceLayout>
        <Switch>
          <Route path='/marketplace/profile' component={ProfilePage} />
          <Redirect path='/' to="/marketplace" />
        </Switch>
      </MarketplaceLayout>
    </BrowserRouter>
  </Provider>
), app_container);
