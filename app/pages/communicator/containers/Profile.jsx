import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {TextBanner} from '../../../components/TextBanner/TextBanner';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
class Profile extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Profile DidMount");
  }

  render() {
    return (
      <section className={this.props.className}>
        <TextBanner title="Profile"/>
      </section>
    )
  }
}

export default styled(Profile)`
  box-sizing: border-box;
  border: 1px solid black;
`
