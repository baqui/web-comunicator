import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import { languagesAvailable } from '../../../utils/consts';
import { getChosenLanguage } from '../../../selectors/userPreferences';
import { switchLanguage } from '../../../actions/user-preferences';
import { isLocalStorageAvailable } from '../../../utils/loadState';
import Language from '../components/Language';

const mapStateToProps = (state) => ({
  language: getChosenLanguage(state)
});
const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (lang) => dispatch( switchLanguage(lang) )
});

@connect(mapStateToProps, mapDispatchToProps)
class EditLanguage extends Component {

  constructor(props) {
    super(props);

    this.switchLanguage = this.switchLanguage.bind(this);
  }

  render() {

    return (
      <section className={ this.props.className }>
        <Language chosenLanguage={this.props.language} options={ languagesAvailable } switchLanguage={ this.switchLanguage } />
      </section>
    )
  }

  switchLanguage(event){
    this.props.changeLanguage(event.target.value);
    if( isLocalStorageAvailable() ){
      localStorage.setItem('language', event.target.value );
    }
  }
}

export default styled(EditLanguage)`
  width: 100%;
`
