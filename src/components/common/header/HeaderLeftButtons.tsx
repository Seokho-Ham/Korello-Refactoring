import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const HeaderLeftButtons = () => {
  const boardListModalHandler: MouseEventHandler<HTMLButtonElement> = () => {
    alert('보드 리스트 띄우기!');
  };
  return (
    <Container>
      <Button aria-label='button-boards' onClick={boardListModalHandler}>
        Board List
      </Button>
    </Container>
  );
};

export default HeaderLeftButtons;

const Container = styled.div`
  width: 50rem;
  padding-left: 20px;
`;
