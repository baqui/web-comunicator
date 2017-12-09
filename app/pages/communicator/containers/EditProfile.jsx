import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { getChosenLanguage } from '../../../selectors/userPreferences';

import Profile from '../components/Profile';

const profileData = {
  name: 'Wojciech Bakłażec',
  email: 'test@wp.pl',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/to_soham/128.jpg',
  status: 'available',
}

const mapStateToProps = (state) => ({
  language: getChosenLanguage(state)
});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
class EditProfile extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={this.props.className}>
        <Profile profile={profileData} />
      </section>
    )
  }
}

export default styled(EditProfile)`
  width: 100%;
`
