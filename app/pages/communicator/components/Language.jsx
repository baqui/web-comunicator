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
    <SwitchPanel>
      <SelectField
          value={chosenLanguage}
          onChange={switchLanguage}
      >
        { options.map( (language, i) => (
          <MenuItem key={i} value={ language.code } primaryText={ language.name } />
        ))}
      </SelectField>
    </SwitchPanel>
  </div>
)

export default styled(Language)`
  width: 100%;
  background: white;
  box-sizing: border-box;
  font-size: 0;
  box-shadow: 0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);
  overflow: hidden;
`

const SwitchPanel = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-left: 4px solid ${ props => props.theme.colors.border };
`
