import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {HomePage} from '../pages/home/HomePage';
import {RegisterPage} from '../pages/register/RegisterPage';
import {LoginPage} from '../pages/login/LoginPage';
import {MainLayout} from '../layouts/MainLayout';

const container = document.getElementById('app');

render ((
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
), container);
