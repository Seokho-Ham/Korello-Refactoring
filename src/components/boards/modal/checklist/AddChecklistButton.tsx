import React, { useState } from 'react';
import useInput from '../../../../hooks/useInput';
import AddForm from '../../../common/AddForm';
import TodoApi from '../../../../api/todo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../reducers';
import { setCurrentCardAction } from '../../../../reducers/board';

const AddChecklistButton = () => {
  const { currentCard } = useSelector((state: RootState) => state.boardReducer);
  const [value, setValue, onChangeValue] = useInput('');
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  const addCheckList = async () => {
    const { result_body } = await TodoApi.addTodo(currentCard.id, value);
    const todoList = currentCard.todoList.slice();
    todoList.push(result_body);
    dispatch(setCurrentCardAction({ ...currentCard, todoList }));
    setValue('');
    setStatus(!status);
  };
  const onClickHandler = () => {
    setStatus(!status);
  };
  return (
    <AddForm
      formCustom={{
        status,
        size: { width: '300px', flexDirection: 'column', margin: '5px 0px' },
      }}
      buttonCustom={{
        children: 'Add Checklist',
        submit: addCheckList,
        onClick: onClickHandler,
        size: { width: 'auto', height: '28px', margin: '10px 10px 0px 0px', padding: '0px 10px' },
      }}
      inputCustom={{
        value,
        onChange: onChangeValue,
        placeholder: 'Add Checklist',
        size: { width: '200px', height: '25px', margin: '5px', padding: '5px 12px' },
      }}
    />
  );
};

export default AddChecklistButton;
