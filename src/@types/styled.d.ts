import 'styled-components'
import { defaultTheme } from '../styles/default'
import { DefaultTheme } from './../../node_modules/styled-components/native/dist/dist/models/ThemeProvider.d';

type ThemeType = typeof defaultTheme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
