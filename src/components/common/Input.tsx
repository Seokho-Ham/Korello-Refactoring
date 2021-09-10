import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  custom?: {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
  };
};

const Input = ({ value, onChange, placeholder, type, custom }: InputProps) => {
  return <Container {...{ value, onChange, placeholder, type, custom }} />;
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
  padding: ${({ custom }) => custom && custom.padding};
  box-shadow: inset 0 0 0 2px #3d3bb8;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0px;
  :focus-visible {
    outline: none;
  }
`;
