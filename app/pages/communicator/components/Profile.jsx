import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import t from '../../../utils/translate';

const ProfileInfo = ({ className, profile }) => (
  <div className={className}>
    <PanelHeader>
      <h3>{t('edit_profile')} <EditIcon className='material-icons'>border_color</EditIcon></h3>
    </PanelHeader>
    <Contact { ...profile } />
  </div>
)

export default styled(ProfileInfo)`
  background: white;
`

export const PanelHeader = styled.div`
  color: gray;
  box-sizing: border-box;
  font-weight: 300;
  border-left: 4px solid ${ props => props.theme.colors.border };
  border-bottom: 2px solid ${ props => props.theme.colors.border };
  width: 100%;
  position: relative;
  padding: 5px;
  > h3 {
    font-size: 15px;
    line-height: 1.2;
    font-weight: 300;
  }
`

const EditIcon = styled.i`
  color: gray;
  display: inline-block;
  cursor: pointer;
  font-weight: 300;
  font-size: 15px;
  position: absolute;
  right: 10px;
  bottom: 5px;
  transition: color .3s;
  &:hover {
    color: ${ props => props.theme.colors.border };
  }
`
