import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../../../reducers/login';
import Button from '../Button';

const HeaderRightButtons = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.clear();
      dispatch(login());
    }
  };

  return (
    <Container>
      <Button className='logout-button' onClickHandler={logoutHandler}>
        Logout
      </Button>
    </Container>
  );
};

export default HeaderRightButtons;

const Container = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 20px;
`;
