import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type BoardItemProps = {
  id: number;
  title: string;
};

const BoardItem: React.FC<BoardItemProps> = ({ id, title }) => {
  return (
    <BoardItemWrapper to={`/board/${id}/cards`}>
      <BoardItemTitle>{title}</BoardItemTitle>
    </BoardItemWrapper>
  );
};

export default BoardItem;

const BoardItemWrapper = styled(Link)`
  width: 200px;
  height: 100px;
  margin: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey3};
  }
`;

const BoardItemTitle = styled.div`
  margin: 5px 7px;
  font-size: ${({ theme }) => theme.font.medium};
`;
