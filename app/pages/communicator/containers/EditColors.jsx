import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import { getChosenLanguage, getChosenTheme } from '../../../selectors/userPreferences';
import { switchTheme } from '../../../actions/user-preferences';
import { colorsKit } from '../../../utils/consts';
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

  componentDidMount() {
    console.log("Editprofile didmount");
  }

  render() {
    return (
      <section className={ this.props.className }>
        <Colors options={ colorsKit } switchTheme={this.switchTheme} />
      </section>
    )
  }

  switchTheme(theme){
    this.props.changeTheme(theme);
  }
}

export default styled(EditColors)`
  width: 100%;
`
