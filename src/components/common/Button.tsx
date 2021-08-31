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
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  children: ReactChild;
  visible?: boolean;
  width?: string;
  height?: string;
  disabled?: boolean;
};

const Button = ({
  bgColor,
  onClickHandler,
  children,
  visible,
  width,
  height,
  disabled,
}: ButtonProps) => {
  return (
    <Container {...{ bgColor, width, height, visible, disabled }} onClick={onClickHandler}>
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
  &:disabled {
    cursor: default;
  }
`;
