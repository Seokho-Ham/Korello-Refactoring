import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SideBar from '../../components/main/SideBar';

describe('<SideBar/>', () => {
  beforeEach(() => {
    render(<SideBar />);
  });

  it('render SideBar', () => {
    const { container } = render(<SideBar />);
    expect(container).toBeInTheDocument();
  });

  it('contains each element', () => {
    const boardElement = screen.queryByText('Board');
    expect(boardElement).toBeInTheDocument();
  });

  it('moves to the link on onclick event', async () => {
    const boardElement = screen.getByText('Board');
    await userEvent.click(boardElement);
    expect(boardElement).toBeInTheDocument();
  });
});
