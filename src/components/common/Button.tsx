import React, { MouseEventHandler, ReactChild, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type ButtonContainer = {
  btType?: string;
  bgColor?: string;
  size?: { width?: string; height?: string; margin?: string };
  visible?: boolean;
  disabled?: boolean;
};

type ButtonProps = {
  btType?: string;
  bgColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactChild;
  visible?: boolean;
  size?: { width?: string; height?: string; margin?: string };
  disabled?: boolean;
};

const Button = ({ btType, bgColor, onClick, children, visible, size, disabled }: ButtonProps) => {
  return (
    <Container {...{ bgColor, size, visible, disabled, onClick, btType }}>{children}</Container>
  );
};

export default Button;

const Container = styled.button<ButtonContainer>`
  display: ${({ visible }) => (!visible ? 'inline-block' : 'none')};
  margin: ${({ size }) => (size ? size.margin : '0px')};
  background-color: ${({ theme, btType }) =>
    btType ? (btType === 'add' ? theme.color.blue : theme.color.red) : theme.color.grey2};
  width: ${({ theme, size }) => (size ? size.width : theme.button.width)};
  height: ${({ theme, size }) => (size ? size.height : theme.button.height)};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ btType }) => (btType ? 'white' : 'black')};
  border: 0px;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  &:hover {
    background-color: ${({ theme, btType }) =>
      btType ? (btType === 'add' ? theme.color.blue : theme.color.red) : theme.color.grey2};
  }
`;
