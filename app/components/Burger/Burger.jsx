import React from 'react';
import PropTypes from 'prop-types';

import {AnimatedBurger} from './components';

const buttonTheme = {
  width: '65px',
  height: '65px',
  transition: '.3s',
  barThickness: '1px',
  barSpace: '10px',
  pad: '16px',
  barsColor: 'rgb(255,255,255)',
  background: 'transparent',
  activeBackground: 'transparent'
}

export const Burger = (props) => (
  <AnimatedBurger styleTheme={buttonTheme} isActive={props.active} onClick={props.onClick} >
    <span>toggle menu</span>
  </AnimatedBurger>
)

Burger.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Burger.defaultProps = {
  active: false
};
