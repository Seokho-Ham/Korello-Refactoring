import React, { ReactChild } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../reducers/login';

type LoginProviderProps = {
  children?: ReactChild;
};

const LoginProvider = ({ children }: LoginProviderProps) => {
  const token = localStorage.getItem('accessToken');
  const dispatch = useDispatch();

  if (token) {
    dispatch(login());
  }

  return <>{children}</>;
};

export default LoginProvider;
