import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import WSClient from '../../models/WSClient';

import {grid} from '../../styles/grid';

import Contacts from './containers/Contacts';
import Messages from './containers/Messages';
import Profile from './containers/Profile';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

const GET_CONTACTS = {
  "type": "iq",
  "payload": {
    "type": "get",
    "id": "12345",
    "query-roster": {}
  }
}

const ADD_CONTACT = {
  "type": "iq",
    "payload": {
    "id": "12345",
    "type": "set",
    "query-roster": {
      "item": [{
        "jid": "alicja@localhost",
        "name": "Alicja z krainy czarów",
        "group": ["Znajomi"]
      }]
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class CommunicatorPage extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout( () => {
      console.log("GET contacts", GET_CONTACTS);
      WSClient.send(GET_CONTACTS)
    }, 1000)
    setTimeout( () => {
      console.log("Add contact", ADD_CONTACT);
      WSClient.send(ADD_CONTACT)
    }, 4000)
    setTimeout( () => {
      console.log("GET contacts", GET_CONTACTS);
      WSClient.send(GET_CONTACTS)
    }, 8000)
  }

  render() {
    return (
      <div id="communicator" className={this.props.className}>
        <Contacts />
        <Messages />
        <Profile />
      </div>
    )
  }
}

export default styled(CommunicatorPage)`
  box-sizing: border-box;
  height: calc(100vh - 90px);
  background-color: ${props => props.theme.colors.backgroundTable};
  ${Contacts} {
    ${grid.breakpoints({df: 3}, 12, '1rem')};
    height: 100%;
    overflow-y: auto;
  }
  ${Messages} {
    ${grid.breakpoints({df: 6}, 12, '1rem')};
    height: 100%;
  }
  ${Profile} {
    ${grid.breakpoints({df: 3}, 12, '1rem')};
    height: 100%;
  }
`
