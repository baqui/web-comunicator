import React from 'react';
import styled from 'styled-components';
import AVATAR_PLACEHOLDER from '../../../assets/images/avatar-placeholder.png';
import {grid} from '../../../styles/grid';
import t from '../../../utils/translate';

const Contact = ({ className, email, name, status, avatar }) => {
  return (
    <div className={className}>
      <Avatar>
        <img src={avatar || AVATAR_PLACEHOLDER} alt="avatar" />
      </Avatar>
      <UserInfoWrapper>
        <Name>{name}</Name>
        <Status status={status}>{t(status)}</Status>
      </UserInfoWrapper>
    </div>
  )
}

const Avatar = styled.div`
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  line-height: 70px;
  img {
    display: inline-block;
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
    vertical-align: middle;
  }
`
const Name = styled.h3`
  display: inline-block;
  font-family: ${ props => props.theme.fonts.defaultFont};
  font-size: 18px;
  width: 100%;
`

const statusColors = {
  available: 'chartreuse',
  unavailable: 'crimson',
  busy: 'gold'
}

const Status = styled.span`
  font-family: ${ props => props.theme.fonts.defaultFont};
  color: gray;
  font-size: 15px;
  display: inline-block;
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    border: 1px solid rgba(0,0,0,.5);
    border-radius: 50%;
    margin-right: 8px;
    background-color: ${ props => statusColors[props.status] ? statusColors[props.status] : 'black'};
    display: inline-block;
    vertical-align: middle;
  }
`

const UserInfoWrapper = styled.div`
  box-sizing: border-box;
`

export default styled(Contact)`
  height: 70px;
  padding: 8px 0;
  margin-bottom: .5rem;
  box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
  background: white;
  cursor: pointer;
  transition: background .3s;
  border-left: 4px solid ${ props => props.theme.colors.border };
  &:hover {
    background: #e3e1e9;
  }
  ${Avatar} {
    ${ grid.breakpoints({df: 4}, 12, '1rem') };
  }
  ${UserInfoWrapper} {
    ${ grid.breakpoints({df: 8}, 12, '1rem') };
  }
`
