import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {TextBanner} from '../../../components/TextBanner/TextBanner';

import {getContactsList} from '../../../selectors/contacts';
import {contactsListFetchData} from '../../../actions/contacts-actions';

import Contact from '../components/Contact';

const mapStateToProps = (state) => ({
  contactsList: getContactsList(state)
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
  border: 1px solid black;
  background-color: ${props => props.theme.colors.backgroundTable};
`
