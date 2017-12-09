import React from 'react';
import styled from 'styled-components';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import t from '../../../utils/translate';

import { PanelHeader } from './Profile';

const Language = ({className, options, switchLanguage, chosenLanguage }) => (
  <div className={className}>
    <PanelHeader>
      <h3>{ t('change_language') }</h3>
    </PanelHeader>
    <select onChange={switchLanguage} value={ chosenLanguage } >
      { options.map( (language, i) => (
        <option key={i} value={ language.code }>{language.name}</option>
      ))}
    </select>
  </div>
)

export default styled(Language)`
  width: 100%;
  background: white;
  box-sizing: border-box;
  font-size: 0;
  box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
  overflow: hidden;
  text-align: center;
  select {
    width: 80%;
    height: 30px;
    background: transparent;
    border: none;
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid gray;
    margin: 20px 0;
    font-size: 16px;
    option {
      font-size: 16px;
    }
  }
`

const SwitchPanel = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-left: 4px solid ${ props => props.theme.colors.border };
`
