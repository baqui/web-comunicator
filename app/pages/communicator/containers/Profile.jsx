import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import EditProfile from './EditProfile';
import EditColors from './EditColors';
import EditLanguage from './EditLanguage';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
class Profile extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={this.props.className}>
        <EditProfile />
        <EditColors />
        <EditLanguage />
      </section>
    )
  }
}

export default styled(Profile)`
  box-sizing: border-box;
`
