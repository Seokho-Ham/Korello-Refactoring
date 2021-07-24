import React from 'react';
import styled from 'styled-components';

const BoardItem = () => {
  return (
    <BoardItemWrapper>
      <div>보드 이름</div>
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
