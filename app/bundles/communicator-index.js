import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from '../Store';

import CommunicatorPage from '../pages/communicator/CommunicatorPage';
import CommunicatorLayout from '../layouts/CommunicatorLayout';

const app_container = document.getElementById('app');

render ((
  <Provider store={store}>
    <BrowserRouter>
      <CommunicatorLayout>
        <Switch>
          <Route path='/communicator' component={CommunicatorPage} />
          <Redirect path='/' to="/communicator" />
        </Switch>
      </CommunicatorLayout>
    </BrowserRouter>
  </Provider>
), app_container);
