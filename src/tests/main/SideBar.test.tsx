import React from 'react';
import { render, screen } from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import SideBar, { sideBarList } from '../../components/main/SideBar';
import App from '../../App';

describe('<SideBar/>', () => {
  it('render SideBar', () => {
    const { container } = render(<SideBar />);
    expect(container).toBeInTheDocument();
    const boardElement = screen.queryByText('Board');
    expect(boardElement).toBeInTheDocument();
  });

  it('render clicked page', () => {
    localStorage.setItem('accessToken', '1');

    render(<App />);
    sideBarList.map(el => {
      const item = screen.getByText(el.name);
      userEvent.click(item);
      expect(screen.getByText('Personal Boards')).toBeInTheDocument();
    });
  });
});
