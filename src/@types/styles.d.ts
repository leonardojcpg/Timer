// arquivo de definições de tipos

import 'styled-components'
import { defaultTheme } from '../Styles/Themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface defaultTheme extends ThemeType {}
}
