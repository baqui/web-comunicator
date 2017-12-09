import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import { getChosenLanguage, getChosenTheme } from '../../../selectors/userPreferences';
import { switchTheme } from '../../../actions/user-preferences';
import { colorsKit } from '../../../utils/consts';
import { isLocalStorageAvailable } from '../../../utils/loadState';
import Colors from '../components/Colors';

const mapStateToProps = (state) => ({
  language: getChosenLanguage(state),
  theme: getChosenTheme(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (theme) => dispatch( switchTheme(theme) )
});

@connect(mapStateToProps, mapDispatchToProps)
class EditColors extends PureComponent {

  constructor(props) {
    super(props);
    this.switchTheme = this.switchTheme.bind(this);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Colors options={ colorsKit } switchTheme={this.switchTheme} theme={ this.props.theme } />
      </div>
    )
  }

  switchTheme(theme){
    this.props.changeTheme(theme);
    if( isLocalStorageAvailable() ){
      localStorage.setItem('theme', theme );
    }
  }
}

export default styled(EditColors)`
  width: 100%;
`
