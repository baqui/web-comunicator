import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Burger} from '../Burger/Burger';
import {AnimatedBurger} from '../Burger/components';
import {NavListStyled} from './NavList';
import LogoImg from '../../assets/images/logo-placeholder.png';
import {breakpoint} from '../../styles/grid';


export default class Nav extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      active: false,
    }

    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this);
  }

  render(){
    return(
      <Navigation>
        <NavBrandWrapper>
          <NavBrand to='/'>
            <img src={LogoImg} alt="temporary project logo" />
          </NavBrand>
          <Burger active={this.state.active} onClick={this.toggleMobileNavigation} />
        </NavBrandWrapper>
        <NavListStyled links={this.props.links} active={this.state.active} />
      </Navigation>
    )
  }

  toggleMobileNavigation(){
    this.setState({ active: !this.state.active });
  }
}

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
}

Nav.defaultProps = {
  links: [{}]
}


const NavBrandWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  z-index: 20;
  background: linear-gradient(to right, rgb(78, 120, 155), rgb(57, 56, 88));
  ${ breakpoint.m`
    background: none;
  `}
  ${AnimatedBurger} {
    position: absolute;
    top: 5px;
    right: 10px;
    ${ breakpoint.m`
      display: none;
    `}
  }
`;

const NavBrand = styled(Link)`
  width: 100%;
  img {
    display: inline-block;
    max-height: 40px;
    padding: 5px 0 5px 20px;
    ${ breakpoint.m`
      max-height: 70px;
      margin-left: 65px;
    `}
  }
`;

const Navigation = styled.nav`
  width: 100%;
  position: relative;
  top: 0;
  z-index: 20;
  ${ breakpoint.m`
    background: linear-gradient(to right, rgb(78, 120, 155), rgb(57, 56, 88));
  `}
`;
