import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { selectTheme } from '../utils/theme';
import { muiTheme } from './BasicTheme';
import '../styles/normalize';
import Nav from '../components/Nav/Nav';
import { navigationLinks } from '../utils/consts';

export const MainLayout = (props) => (
  <ThemeProvider theme={ selectTheme('default') }>
    <MuiThemeProvider muiTheme={muiTheme} className="mui-custom">
      <section className="main-page-wrapper">
        <Nav links={navigationLinks} />
        { props.children }
      </section>
    </MuiThemeProvider>
  </ThemeProvider>
)
