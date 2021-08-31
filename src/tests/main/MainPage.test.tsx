import React from 'react';
import { render } from '@testing-library/react';
import { MainPage } from '../../pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../styles/theme';
describe('<MainPage/>', () => {
  it('render component', () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <MainPage />
        </ThemeProvider>
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });
});
