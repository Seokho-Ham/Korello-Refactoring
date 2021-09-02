import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import Button from '../common/Button';
import Input from '../common/Input';

const AddBoardForm = () => {
  const [boardTitle, setBoardTitle] = useInput('');
  const [status, statusHandler] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    statusHandler(!status);
  };

  const submitHandler: (e: FormEvent<HTMLFormElement>) => void = e => {
    e.preventDefault();
    //api 요청하는 코드 추가
    //응답으로 온 데이터 현재 store 데이터에 추가할것.
  };
  return (
    <div>
      <BoardForm status={status} onSubmit={submitHandler}>
        <Input
          type='text'
          value={boardTitle}
          onChange={setBoardTitle}
          custom={{ width: '150px', height: '25px', margin: '5px' }}
        />
        <FormButtonContainer>
          <Button {...{ btType: 'add', size: { width: '70px', height: '30px', margin: '5px' } }}>
            Add
          </Button>
          <Button
            {...{ btType: 'cancel', size: { width: '70px', height: '30px', margin: '5px' } }}
            onClick={onClickHandler}
          >
            Cancel
          </Button>
        </FormButtonContainer>
      </BoardForm>
      <Button
        {...{ size: { width: '200px', height: '100px', margin: '5px' }, visible: status }}
        onClick={onClickHandler}
      >
        Add Board
      </Button>
    </div>
  );
};

export default AddBoardForm;

const BoardForm = styled.form<{ status: boolean }>`
  display: ${props => (props.status ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.grey2};
  width: 200px;
  height: 100px;
  margin: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
