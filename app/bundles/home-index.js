import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {HomePage} from '../pages/home/HomePage';
import {LoginPage} from '../pages/login/LoginPage';
import {NotFoundPage} from '../pages/not_found/NotFoundPage';
import {MainLayout} from '../layouts/MainLayout';

const container = document.getElementById('app');

render ((
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
), container);
