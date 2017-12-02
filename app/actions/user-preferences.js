import { SWITCH_LANGUAGE, SWITCH_THEME } from './actions';
import RestClient from '../models/RestClient.js';

export const switchLanguage = (language) => ({
  type: SWITCH_LANGUAGE,
  language
})

export const switchTheme = (theme) => ({
  type: SWITCH_THEME,
  theme
})
