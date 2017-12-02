import { DefaultTheme } from '../styles/DefaultTheme';
import { BlueTheme } from '../styles/BlueTheme';
import { OrangeTheme } from '../styles/OrangeTheme';
import { YellowTheme } from '../styles/YellowTheme';
import { RedTheme } from '../styles/RedTheme';


const themes = {
  default: DefaultTheme,
  blue: BlueTheme,
  orange: OrangeTheme,
  red: RedTheme,
  yellow: YellowTheme
}

export const selectTheme = (theme) => themes[theme]
