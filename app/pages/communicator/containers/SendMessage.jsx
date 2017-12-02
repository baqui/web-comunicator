import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import t from '../../../utils/translate';
import { getChosenLanguage } from '../../../selectors/userPreferences';
import ActionIcon, {TextInput} from '../components/Messages';

const mapStateToProps = (state) => ({
  language: getChosenLanguage(state)
});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
class SendMessage extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("SendMessage DidMount");
  }

  render() {
    return (
      <section className={this.props.className}>
        <TextInput placeholder={t('write_message')} />
        <ActionIcon type='file' handleClick={ () => {console.log("HandleClick action")}} />
        <ActionIcon type='emoticon' handleClick={ () => {console.log("HandleClick action")}} />
        <ActionIcon type='image' handleClick={ () => {console.log("HandleClick action")}} />
      </section>
    )
  }
}

export default styled(SendMessage)`
  box-sizing: border-box;
  width: 100%;
  display: inline-block;
  text-align: right;
  position: relative;
  background: white;
  height: 55px;
  box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
  padding-right: 10px;
  box-sizing: border-box;
  border-left: 4px solid ${ props => props.theme.colors.border };
  ${TextInput} {
    width: calc( 100% - 145px);
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
