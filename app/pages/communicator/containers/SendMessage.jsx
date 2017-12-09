import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import t from '../../../utils/translate';
import { getChosenLanguage } from '../../../selectors/userPreferences';
import ActionIcon, {TextInput} from '../components/Messages';
import { getCurrentUserId } from '../../../selectors/users';
import { sendMessage } from '../../../actions/messages-actions';

const mapStateToProps = (state) => ({
  language: getChosenLanguage(state),
  currentUserId: getCurrentUserId(state)
});
const mapDispatchToProps = (dispatch) => ({
  sendUserMessage: (message) => dispatch( sendMessage(message) )
});

@connect(mapStateToProps, mapDispatchToProps)
class SendMessage extends PureComponent {

  constructor(props) {
    super(props);

    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleSend);
  }

  render() {
    return (
      <section className={this.props.className}>
        <TextInput placeholder={t('write_message')} innerRef={input => this.input = input} />
        <ActionIcon type='file' handleClick={ () => {console.log("HandleClick action")}} />
        <ActionIcon type='emoticon' handleClick={ () => {console.log("HandleClick action")}} />
        <ActionIcon type='image' handleClick={ () => {console.log("HandleClick action")}} />
      </section>
    )
  }

  handleSend(target){
    if(target.charCode === 13) {
      this.props.sendUserMessage({
        message: this.input.value,
        type: 'text',
        userID: this.props.currentUserId
      });
      this.input.value = '';
    }
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
