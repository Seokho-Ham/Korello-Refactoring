import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  custom?: {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
  };
};

const Input = ({ value, onChange, type, custom }: InputProps) => {
  return <Container {...{ value, onChange, type, custom }} />;
};

export default Input;

const Container = styled.input<{
  custom?: {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
  };
}>`
  margin: ${({ custom }) => custom && custom.margin};
  width: ${({ custom }) => custom && custom.width};
  height: ${({ custom }) => custom && custom.height};
  /* box-shadow: ${({ theme }) => theme.shadow}; */
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0px;
`;
