import React from 'react';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import TodoApi from '../../../../api/todo';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCardAction } from '../../../../reducers/board';
import { RootState } from '../../../../reducers';
type ChecklistItemProps = {
  id: string;
  status: boolean;
  title: string;
};

const ChecklistItem = ({ id, status, title }: ChecklistItemProps) => {
  const { currentCard } = useSelector((state: RootState) => state.boardReducer);
  const dispatch = useDispatch();

  const changeStatusHandler = async () => {
    await TodoApi.changeTodoStatus(id);
    const todoList: {
      todoId: string;
      title: string;
      status: boolean;
    }[] = currentCard.todoList.slice();

    todoList.forEach(el => {
      if (el.todoId === id) {
        el.status = !el.status;
      }
    });

    dispatch(setCurrentCardAction({ ...currentCard, todoList: todoList }));
  };
  return (
    <ItemContainer>
      {status ? (
        <MdCheckBox size='18px' onClick={changeStatusHandler} />
      ) : (
        <MdCheckBoxOutlineBlank size='18px' onClick={changeStatusHandler} />
      )}
      <span>{title}</span>
    </ItemContainer>
  );
};

export default ChecklistItem;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  font-size: 16px;
  span {
    margin: 0px 10px;
  }
`;
