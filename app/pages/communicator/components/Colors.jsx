import React from 'react';
import styled from 'styled-components';

import t from '../../../utils/translate';
import { PanelHeader } from './Profile';

const Colors = ({className, options, switchTheme, theme }) => (
  <div className={className}>
    <PanelHeader>
      <h3>{t('change_colors')}</h3>
    </PanelHeader>
    <ColorsList>
      { options.map( (color, i) => {
        const isActive = theme === color.theme;
        return <ColorItem
                  key={i} { ...color }
                  active={ isActive }
                  onClick={ () => { switchTheme(color.theme) }}
               />
      })}
    </ColorsList>
  </div>
)

export default styled(Colors)`
  width: 100%;
  background: white;
  box-sizing: border-box;
  margin-bottom: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
`

const ColorsList = styled.ul`
  list-style: none;
  width: 100%;
  background: white;
  border-left: 4px solid ${ props => props.theme.colors.border };
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0;
`
const ColorItem = styled.li`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  box-sizing: border-box;
  border: ${ props => props.active ? '3px' : '1px'} solid black;
  background-color: ${ props => props.symbol };
  cursor: pointer;
  margin: 0 10px;
`
