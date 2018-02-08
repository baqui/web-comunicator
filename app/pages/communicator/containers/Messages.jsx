import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {TextBanner} from '../../../components/TextBanner/TextBanner';
import {MessagesContainer} from '../components/Messages';
import {TextMessage} from '../components/Message';
import SendMessage from './SendMessage';
import { getChosenLanguage } from '../../../selectors/userPreferences';
import { getMessagesList } from '../../../selectors/messages';
import { getCurrentUserId } from '../../../selectors/users';

const mapStateToProps = (state) => ({
  language: getChosenLanguage(state),
  messages: getMessagesList(state),
  currentUserId: getCurrentUserId(state)
});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
class Messages extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <MessagesContainer>
          { this.props.messages.map( (message, key) => {
            switch(message.type) {
            case 'text':
              const isMine = message.userID == this.props.currentUserId;
              return <TextMessage key={key} message={message.message} isMine={isMine} />
            }
          })}
        </MessagesContainer>
        <SendMessage />
      </div>
    )
  }
}

export default styled(Messages)`
  box-sizing: border-box;
  position: relative;
  ${SendMessage} {
    position: absolute;
    bottom: ${ props => props.theme.layout.sendMessage.bottom };
  }
`
