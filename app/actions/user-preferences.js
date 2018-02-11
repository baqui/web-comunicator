import types from './actions';
import RestClient from '../models/RestClient.js';
import WSClient from '../models/WSClient';

export const switchLanguage = (language) => ({
  type: types.SWITCH_LANGUAGE,
  language
})

export const switchTheme = (theme) => ({
  type: types.SWITCH_THEME,
  theme
})
