import React from 'react';
import styled from 'styled-components';

import FileIcon from '../../../assets/images/folder.png';
import ImageIcon from '../../../assets/images/image.png';
import EmoticonIcon from '../../../assets/images/smile.png';

export const MessagesContainer = styled.div`
  box-sizing: border-box;
  background: white;
  width: 100%;
  height: calc(100% - 100px);
  box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
  box-sizing: border-box;
  border-left: 4px solid ${ props => props.theme.colors.border };
`

export const TextInput = styled.input`
  box-sizing: border-box;
  background: transparent;
  border: none;
  border-radius: 0;
  font-weight: 500;
  font-size: .8rem;
  vertical-align: bottom;
  display: inline-block;
  line-height: 1.2;
  height: 55px;
  padding: 0;
  padding-left: 10px;
`

const icons = {
  emoticon: FileIcon,
  file: ImageIcon,
  image: EmoticonIcon,
}
const ActionIcon = ({handleClick, className, type}) => (
  <span className={className} onClick={() => {handleClick()}}>
    <img src={icons[type]} alt='action-icon'/>
  </span>
)

export default styled(ActionIcon)`
  display: inline-block;
  margin: 0 5px;
  height: 55px;
  position: relative;
  cursor: pointer;
  opacity: 1;
  transition: opacity;
  &:hover {
    opacity: .7;
  }
  img {
    display: inline-block;
    max-height: 32px;
    max-width: 32px;
    margin-top: 10px;
  }
`
