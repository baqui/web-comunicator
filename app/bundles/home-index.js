import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../Store';

import {HomePage} from '../pages/home/HomePage';
import {RegisterPage} from '../pages/register/RegisterPage';
import {LoginPage} from '../pages/login/LoginPage';
import {MainLayout} from '../layouts/MainLayout';

const container = document.getElementById('app');

render ((
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
), container);
