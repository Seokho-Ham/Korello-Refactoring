import React from 'react';
import { render, screen } from '@testing-library/react';
import BoardListContainer from '../../components/main/BoardListContainer';
import { boardList } from '../../assets/data';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('<Board List/>', () => {
  const { container } = render(
    <BrowserRouter>
      <BoardListContainer />
    </BrowserRouter>,
  );
  it('render Board List', () => {
    expect(container).toBeInTheDocument();
  });
  it('render each board items', () => {
    boardList.forEach(board => {
      expect(screen.getByText(board.title)).toBeInTheDocument();
    });
  });
  it('render add, delete button', () => {
    const addButton = screen.getByText('Add');
    const deleteButton = screen.getByText('Delete');

    expect(addButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it('add one board to list', async () => {
    const length = boardList.length;
    const addButton = screen.getByText('Add');
    await userEvent.click(addButton);
    expect(boardList.length).toBe(length + 1);
  });
  it('delete one board to list', async () => {
    const length = boardList.length;
    const deleteButton = screen.getByText('Delete');
    await userEvent.click(deleteButton);
    expect(boardList.length).toBe(length - 1);
  });
});
