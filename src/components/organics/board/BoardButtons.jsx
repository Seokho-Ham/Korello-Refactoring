import React from 'react';
import styled from 'styled-components';
const BoardButtons = () => {
  return <BoardButtonContainer>보드 버튼 목록입니다.</BoardButtonContainer>;
};

export default BoardButtons;

const BoardButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid yellowgreen;
`;
