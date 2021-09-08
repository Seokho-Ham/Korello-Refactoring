import { css, DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '0.5rem',
  shadow: 'rgb(0 0 0 / 10%) 0px 0px 10px;',
  color: {
    red: '#e2472f',
    green: '#61d341',
    blue: '#3d3bb8',
    grey1: '#f4f5f7',
    grey2: '#ebecf0',
    grey3: '#e5e5e5',
    white: '#fff',
  },

  font: {
    small: css`
      font-size: 1.2rem;
      font-weight: 400;
    `,
    medium: '1.4rem',
    large: '1.6rem',
    x_large: '2rem',
    light: '#fff',
  },

  button: {
    width: 'auto',
    height: '2.5rem',
  },
};

export { myTheme };
