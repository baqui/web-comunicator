import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {grid} from '../../styles/grid';

import Contacts from './containers/Contacts';
import Messages from './containers/Messages';
import Profile from './containers/Profile';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
class CommunicatorPage extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("CommunicatorPage DidMount");
  }

  render() {
    return (
      <section id="communicator" className={this.props.className}>
        <Contacts />
        <Messages />
        <Profile />
      </section>
    )
  }
}

export default styled(CommunicatorPage)`
  box-sizing: border-box;
  height: calc(100vh - 90px);
  ${Contacts} {
    ${grid.breakpoints({df: 3}, 12, '0px')};
    height: 100%;
    //overflow-y: scroll;
  }
  ${Messages} {
    ${grid.breakpoints({df: 6}, 12, '0px')};
    height: 100%;
    overflow: hidden;
  }
  ${Profile} {
    ${grid.breakpoints({df: 3}, 12, '0px')};
    height: 100%;
  }
`