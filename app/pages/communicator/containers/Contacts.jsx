import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


import { getChosenLanguage } from '../../../selectors/userPreferences';
import { getContactsList } from '../../../selectors/contacts';
import { contactsListFetchData } from '../../../actions/contacts-actions';

import Contact from '../components/Contact';

const mapStateToProps = (state) => ({
  contactsList: getContactsList(state),
  language: getChosenLanguage(state)
});
const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch( contactsListFetchData() )
});

@connect(mapStateToProps, mapDispatchToProps)
class Contacts extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <section className={this.props.className}>
        { this.props.contactsList.map( a => <Contact key={a.id} {...a.toJS() } />) }
      </section>
    )
  }
}

export default styled(Contacts)`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.backgroundTable};
`
