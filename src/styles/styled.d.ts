import 'styled-components';

import { InterfaceTheme } from '../interfaces';

declare module 'styled-components' {
  export type DefaultTheme = InterfaceTheme;
}
