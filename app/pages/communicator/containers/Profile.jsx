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
      <div className={this.props.className}>
        <EditProfile />
        <EditColors />
        <EditLanguage />
      </div>
    )
  }
}

export default styled(Profile)`
  box-sizing: border-box;
  position: relative;
  ${EditProfile}{
    position: ${ props => props.theme.layout.editProfile.position };
    top: ${ props => props.theme.layout.editProfile.top };
  }
  ${EditColors}{
    position: ${ props => props.theme.layout.editColors.position };
    top: ${ props => props.theme.layout.editColors.top };
  }
  ${EditLanguage}{
    position: ${ props => props.theme.layout.editLanguage.position };
    top: ${ props => props.theme.layout.editLanguage.top };
  }
`
