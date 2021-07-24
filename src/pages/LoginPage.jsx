import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/organics/login/LoginForm';
const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginForm />
    </LoginPageWrapper>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
