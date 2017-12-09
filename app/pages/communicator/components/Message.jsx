import React from 'react';
import styled from 'styled-components';

const Text = ({className, message, isMine}) => (
  <div className={className}>
    <span>{message}</span>
  </div>
)

export const TextMessage = styled(Text)`
  width: 100%;
  padding: 3px 20px;
  box-sizing: border-box;
  text-align: ${ props => props.isMine ? 'right' : 'left'};
  span {
    display: inline-block;
    padding: 5px 10px;
    color: white;
    background: ${ props => props.isMine ? props.theme.colors.myMessage : props.theme.colors.otherMessage};
    border-radius: 4px;
    font-size: 15px;
  }
`
