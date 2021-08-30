import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type BoardItemProps = {
  id: number;
  title: string;
};

const BoardItem: React.FC<BoardItemProps> = ({ id, title }) => {
  return (
    <BoardItemWrapper>
      <BoardItemTitle>
        <Link to={`board/${id}/cards`}>{title}</Link>
      </BoardItemTitle>
    </BoardItemWrapper>
  );
};

export default BoardItem;

const BoardItemWrapper = styled.div`
  width: 200px;
  height: 100px;
  margin: 5px;
  border: 1px solid red;
  border-radius: 5px;
`;

const BoardItemTitle = styled.div`
  margin: 5px 7px;
`;
