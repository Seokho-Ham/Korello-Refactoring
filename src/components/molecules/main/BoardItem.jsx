import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BoardItem = () => {
  return (
    <BoardItemWrapper>
      <Link to='board/12/cards'>보드 이름</Link>
    </BoardItemWrapper>
  );
};

export default BoardItem;

const BoardItemWrapper = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid red;
  margin: 5px;
`;
