import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import { AiOutlineHome } from 'react-icons/ai';
const HeaderLeftButtons = () => {
  const boardListModalHandler: MouseEventHandler<HTMLButtonElement> = () => {
    alert('보드 리스트 띄우기!');
  };
  return (
    <Wrapper>
      <Container>
        <HomeButton to='/boards'>
          <AiOutlineHome size='27px' />
        </HomeButton>
        <Button
          aria-label='button-boards'
          onClick={boardListModalHandler}
          size={{ height: '30px', padding: '0px 3px', margin: '5px' }}
        >
          Board List
        </Button>
      </Container>
    </Wrapper>
  );
};

export default HeaderLeftButtons;

const Wrapper = styled.div`
  width: 50rem;
  padding-left: 10px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: unset;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.color.grey2};
  margin: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover {
    opacity: 0.7;
  }
`;
