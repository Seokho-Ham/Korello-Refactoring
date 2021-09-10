import React, { MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../api/main';
import useInput from '../../hooks/useInput';
import { addBoardAction } from '../../reducers/main';
import Firebase from '../../firebase';
import AddForm from '../common/AddForm';
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
    <AddForm
      formCustom={{
        status,
        type: 'Board',
        size: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px',
          width: '200px',
          height: '100px',
        },
      }}
      buttonCustom={{
        children: 'Add Card',
        submit: submitHandler,
        onClick: onClickHandler,
        size: { width: '200px', height: '100px' },
      }}
      inputCustom={{
        value: boardTitle,
        onChange: boardChangeHandler,
        placeholder: 'Add Board',
        size: { width: '150px', height: '30px', margin: '5px' },
      }}
    />
  );
};

export default AddBoardForm;
