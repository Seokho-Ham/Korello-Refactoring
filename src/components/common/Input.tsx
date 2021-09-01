import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
};

const Input = ({ value, onChange, type }: InputProps) => {
  return <Container {...{ value, onChange, type }} />;
};

export default Input;

const Container = styled.input`
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0px;
`;
