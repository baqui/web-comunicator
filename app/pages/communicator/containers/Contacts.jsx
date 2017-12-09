import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


import { getChosenLanguage } from '../../../selectors/userPreferences';
import { getContactsList } from '../../../selectors/contacts';
import { getActiveUser } from '../../../selectors/messages';

import { contactsListFetchData } from '../../../actions/contacts-actions';
import { messagesListFetchData, setActiveUser } from '../../../actions/messages-actions';

import Contact from '../components/Contact';

const mapStateToProps = (state) => ({
  contactsList: getContactsList(state),
  language: getChosenLanguage(state),
  activeUserId: getActiveUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch( contactsListFetchData() ),
  getMessages: (userID) => dispatch( messagesListFetchData(userID) ),
  selectActiveUser: (userID) => dispatch( setActiveUser(userID) )
});

@connect(mapStateToProps, mapDispatchToProps)
class Contacts extends PureComponent {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick;
  }

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div className={this.props.className}>
        { this.props.contactsList.map( a => (
          <Contact {...a.toJS() }
                   key={a.id}
                   handleClick={this.handleClick.bind(this, a.id)}
                   isActive={ a.id == this.props.activeUserId }
          />
        ))}
      </div>
    )
  }

  handleClick(userID){
    this.props.getMessages(userID);
    this.props.selectActiveUser(userID);
  }
}

export default styled(Contacts)`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.backgroundTable};
`
