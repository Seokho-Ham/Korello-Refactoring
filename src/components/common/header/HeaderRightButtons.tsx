import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../../../reducers/login';
import Button from '../Button';

const HeaderRightButtons = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.clear();
    dispatch(login());
  };

  return (
    <Container>
      <Button onClick={logoutHandler}>Logout</Button>
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
