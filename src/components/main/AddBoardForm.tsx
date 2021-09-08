import React, { FormEvent, MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addBoard } from '../../api/main';
import useInput from '../../hooks/useInput';
import { addBoardAction } from '../../reducers/main';
import Button from '../common/Button';
import Input from '../common/Input';
import Firebase from '../../firebase';
const AddBoardForm = () => {
  const [boardTitle, setBoardTitle, boardChangeHandler] = useInput('');
  const [status, statusHandler] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    statusHandler(!status);
  };

  const submitHandler: MouseEventHandler<HTMLElement> = async () => {
    if (boardTitle === '') {
      alert('이름을 입력해주세요.');
    } else {
      const { result_body } = await addBoard({ name: boardTitle });
      console.log(result_body);
      if (result_body) {
        dispatch(addBoardAction(result_body));
        await Firebase.addBoardStore(result_body.id);
        statusHandler(!status);
        setBoardTitle('');
      } else {
        dispatch(fail());
      }
    }
  };
  return (
    <FormWrapper>
      <BoardForm status={status}>
        <Input
          type='text'
          value={boardTitle}
          onChange={boardChangeHandler}
          custom={{ width: '150px', height: '25px', margin: '5px' }}
        />
        <FormButtonContainer>
          <Button
            {...{ btType: 'add', size: { width: '70px', height: '30px', margin: '5px' } }}
            onClick={submitHandler}
          >
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
        {...{ size: { width: '200px', height: '100px' }, visible: status }}
        onClick={onClickHandler}
      >
        Add Board
      </Button>
    </FormWrapper>
  );
};

export default AddBoardForm;

const FormWrapper = styled.div`
  margin: 10px;
`;

const BoardForm = styled.div<{ status: boolean }>`
  display: ${props => (props.status ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.grey2};
  width: 200px;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
