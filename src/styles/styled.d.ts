import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    color: {
      red: string;
      green: string;
      blue: string;
      grey1: string;
      grey2: string;
      white: string;
    };
    font: {
      small: string;
      medium: string;
      large: string;
      light: string;
    };
    button: {
      width: string;
      height: string;
    };
  }
}
