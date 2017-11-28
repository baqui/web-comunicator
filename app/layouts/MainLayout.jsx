import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';

import {WebCommunicatorBasicTheme as theme} from '../styles/WebCommunicatorBasicTheme';
import '../styles/normalize';
import Nav from '../components/Nav/Nav';

const example_link = {
  name: 'Login',
  url: '/login',
  title: '',
  action: ''
}

export const MainLayout = (props) => (
  <ThemeProvider theme={theme}>
    <section className="main-page-wrapper">
      <Nav links={[example_link]} />
      { props.children }
    </section>
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
}
