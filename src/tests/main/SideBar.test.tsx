import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SideBar from '../../components/main/SideBar';

describe('<SideBar/>', () => {
  const { container } = render(<SideBar />);

  it('render SideBar', () => {
    expect(container).toBeInTheDocument();
  });

  it('contains each element', () => {
    const boardElement = screen.getByText('Board');
    expect(boardElement).toBeInTheDocument();
  });

  it('moves to the link on onclick event', () => {
    const boardElement = screen.getByText('Board');
    userEvent.click(boardElement);
    expect(boardElement).toBeInTheDocument();
  });
});
