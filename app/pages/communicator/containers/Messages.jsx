import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {TextBanner} from '../../../components/TextBanner/TextBanner';

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
        <TextBanner title="Messages"/>
      </section>
    )
  }
}

export default styled(Messages)`
  box-sizing: border-box;
  border: 1px solid black;
`
