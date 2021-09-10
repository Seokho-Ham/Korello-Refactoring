import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

type FormProps = {
  formCustom: {
    status: boolean;
    type?: string;
    size: {
      flexDirection?: string;
      justifyContent?: string;
      alignItems?: string;
      width?: string;
      height?: string;
      margin?: string;
      padding?: string;
    };
  };
  buttonCustom: {
    children: string;
    submit: MouseEventHandler<HTMLButtonElement>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: { width?: string; height?: string; margin?: string; padding?: string };
  };
  inputCustom: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    size?: { width?: string; height?: string; margin?: string; padding?: string };
  };
};

const AddForm = ({ formCustom, buttonCustom, inputCustom }: FormProps) => {
  return (
    <Wrapper {...{ custom: formCustom.size }}>
      <FormContainer
        {...{ status: formCustom.status, type: formCustom.type, custom: formCustom.size }}
      >
        <Input
          value={inputCustom.value}
          onChange={inputCustom.onChange}
          placeholder={inputCustom.placeholder}
          custom={inputCustom.size}
        />
        <FormButtonContainer {...{ custom: formCustom.size }}>
          <Button
            {...{
              btType: 'add',
              size: { ...buttonCustom.size, width: '60px', height: '30px', margin: '5px' },
            }}
            onClick={buttonCustom.submit}
          >
            Add
          </Button>
          <Button
            {...{
              btType: 'cancel',
              size: { ...buttonCustom.size, width: '60px', height: '30px', margin: '5px' },
            }}
            onClick={buttonCustom.onClick}
          >
            Cancel
          </Button>
        </FormButtonContainer>
      </FormContainer>
      <Button
        {...{ size: buttonCustom.size, visible: formCustom.status }}
        onClick={buttonCustom.onClick}
      >
        {buttonCustom.children}
      </Button>
    </Wrapper>
  );
};

export default AddForm;

const Wrapper = styled.div<{
  custom: {
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
  };
}>`
  margin: ${({ custom }) => (custom.margin ? custom.margin : '0px')};
`;

const FormContainer = styled.div<{
  status: boolean;
  type?: string;
  custom: {
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
  };
}>`
  display: ${({ status }) => (status ? 'flex' : 'none')};
  flex-direction: ${({ custom }) => (custom.flexDirection ? custom.flexDirection : 'row')};
  justify-content: ${({ custom }) => (custom.justifyContent ? custom.justifyContent : 'normal')};
  align-items: ${({ custom }) => (custom.alignItems ? custom.alignItems : 'normal')};
  width: ${({ custom }) => custom.width};
  height: ${({ custom }) => custom.height};
  padding: ${({ custom }) => (custom.padding ? custom.padding : '0px')};
  background-color: ${({ type, theme }) => (type ? theme.color.grey2 : 'none')};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const FormButtonContainer = styled.div<{
  custom: {
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
  };
}>`
  display: flex;
  justify-content: ${({ custom }) => (custom.justifyContent ? custom.justifyContent : 'normal')};
`;
