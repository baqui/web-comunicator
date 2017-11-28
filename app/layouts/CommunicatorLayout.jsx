import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';

import Nav from '../components/Nav/Nav';
import {WebCommunicatorBasicTheme as theme} from '../styles/WebCommunicatorBasicTheme';
import '../styles/normalize';


const links = [
  {
    name: 'Home',
    url: '/',
    title: '',
    action: '',
    internal: false
  }
];

export const CommunicatorLayout = (props) => (
  <ThemeProvider theme={theme} >
    <section className="main-page-wrapper">
      <Nav links={links} />
      { props.children }
    </section>
  </ThemeProvider>
)

CommunicatorLayout.propTypes = {
  children: PropTypes.element.isRequired
}
