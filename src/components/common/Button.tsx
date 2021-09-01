import React, { MouseEventHandler, ReactChild } from 'react';
import styled from 'styled-components';

type ButtonContainer = {
  bgColor?: string;
  width?: string;
  height?: string;
  visible?: boolean;
  disabled?: boolean;
};

type ButtonProps = {
  bgColor?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactChild;
  visible?: boolean;
  width?: string;
  height?: string;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  bgColor,
  onClick,
  children,
  visible,
  width,
  height,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <Container className={className} {...{ bgColor, width, height, visible, disabled, onClick }}>
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button<ButtonContainer>`
  background-color: ${({ theme, bgColor }) => (bgColor ? bgColor : theme.color.grey2)};
  width: ${({ theme, width }) => (width ? width : theme.button.width)};
  height: ${({ theme, height }) => (height ? height : theme.button.height)};
  visibility: ${({ visible }) => (!visible ? 'visible' : 'hidden')};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0px;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.grey3};
  }
`;
