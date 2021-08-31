import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SideBar, { sideBarList } from '../../components/main/SideBar';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../styles/theme';

describe('<SideBar/>', () => {
  it('render SideBar', () => {
    const { container } = render(
      <ThemeProvider theme={myTheme}>
        <SideBar />
      </ThemeProvider>,
    );
    expect(container).toBeInTheDocument();

    const boardElement = screen.queryByText('Board');
    expect(boardElement).toBeInTheDocument();
  });

  it('render clicked page', () => {
    render(
      <ThemeProvider theme={myTheme}>
        <SideBar />
      </ThemeProvider>,
    );
    sideBarList.map(async el => {
      const item = screen.queryByText(el.name);
      if (item) {
        await userEvent.click(item);
        expect(screen.queryByText('보드 종류')).toBeInTheDocument();
      }
    });
  });
});
