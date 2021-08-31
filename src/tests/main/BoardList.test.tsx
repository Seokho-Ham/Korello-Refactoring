import React from 'react';
import BoardListContainer from '../../components/main/BoardListContainer';
import { render, screen } from '@testing-library/react';
import { boardList } from '../../assets/data';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../styles/theme';

describe('<Board List/>', () => {
  it('render Board List', () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <BoardListContainer />
        </ThemeProvider>
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });
});
