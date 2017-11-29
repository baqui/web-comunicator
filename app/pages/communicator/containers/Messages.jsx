import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {TextBanner} from '../../../components/TextBanner/TextBanner';
import {MessagesContainer} from '../components/Messages';
import SendMessage from './SendMessage';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
class Messages extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Messages DidMount");
  }

  render() {
    return (
      <section className={this.props.className}>
        <MessagesContainer>
          MESSEGES CONTAINER
        </MessagesContainer>
        <SendMessage />
      </section>
    )
  }
}

export default styled(Messages)`
  box-sizing: border-box;
  position: relative;
  ${SendMessage} {
    position: absolute;
    bottom: 30px;
  }
`
