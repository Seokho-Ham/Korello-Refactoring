import React from 'react';
import styled from 'styled-components';
const BoardButtons = () => {
  return (
    <BoardButtonContainer>
      <div>보드 버튼 목록입니다.</div>
    </BoardButtonContainer>
  );
};

export default BoardButtons;

const BoardButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.medium};
`;
