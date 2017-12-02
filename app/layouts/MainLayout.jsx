import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { selectTheme } from '../utils/theme';
import { muiTheme } from './BasicTheme';
import '../styles/normalize';
import Nav from '../components/Nav/Nav';

const example_link = {
  name: 'Login',
  url: '/login',
  title: '',
  action: ''
}

export const MainLayout = (props) => (
  <ThemeProvider theme={ selectTheme('default') }>
    <MuiThemeProvider muiTheme={muiTheme} className="mui-custom">
      <section className="main-page-wrapper">
        <Nav links={[example_link]} />
        { props.children }
      </section>
    </MuiThemeProvider>
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
}
