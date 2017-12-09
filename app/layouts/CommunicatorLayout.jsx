import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { selectTheme } from '../utils/theme';
import { getChosenTheme } from '../selectors/userPreferences';
import {muiTheme} from './BasicTheme';
import Nav from '../components/Nav/Nav';
import { comunicatorLinks } from '../utils/consts';
import '../styles/normalize';


const mapStateToProps = (state) => ({
  theme: getChosenTheme(state)
});

const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
class CommunicatorLayout extends PureComponent {

  render = () => (
    <ThemeProvider theme={ selectTheme( this.props.theme ) } >
      <MuiThemeProvider muiTheme={muiTheme} className="mui-custom">
        <div className="main-page-wrapper">
          <Nav links={comunicatorLinks} />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

CommunicatorLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CommunicatorLayout;
