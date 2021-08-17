import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
const LoginPage = () => {
  return (
    <>
      <LoginPageWrapper>
        <LoginPageContainer>
          <LoginForm />
        </LoginPageContainer>
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LoginPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  /* background: #e2e2e2; */
  /* background: #fff; */
`;
