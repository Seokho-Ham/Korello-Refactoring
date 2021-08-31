import React from 'react';
import BoardListContainer from '../../components/main/BoardListContainer';
import { render, screen } from '@testing-library/react';
import { boardList } from '../../assets/data';
import { BrowserRouter } from 'react-router-dom';

describe('<Board List/>', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BoardListContainer />
      </BrowserRouter>,
    );
  });

  it('render Board List', () => {
    const { container } = render(
      <BrowserRouter>
        <BoardListContainer />
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  it('render each board items', () => {
    boardList.forEach(board => {
      expect(screen.queryByText(board.title)).toBeInTheDocument();
    });
  });
});
