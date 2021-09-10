import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Firebase from '../../../firebase';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { setTagAction } from '../../../reducers/board';
import AddForm from '../../common/AddForm';

const AddTagForm = () => {
  const { currentBoardId, tagList } = useSelector((state: RootState) => state.boardReducer);
  const [tagValue, setTagValue, tagValueHandler] = useInput('');
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const submitHandler = async () => {
    if (tagValue.length === 0) {
      alert('태그 제목을 입력해주세요.');
    } else {
      await Firebase.addTagStore(currentBoardId, tagValue, tagList.length);
      dispatch(setTagAction({ name: tagValue, order: tagList.length + 1 }));
      setTagValue('');
      setStatus(!status);
    }
  };
  const onClickHandler = () => {
    setStatus(!status);
  };

  return (
    <AddForm
      formCustom={{ status, size: { flexDirection: 'column', margin: '10px' } }}
      buttonCustom={{
        children: 'Add Tag',
        submit: submitHandler,
        onClick: onClickHandler,
        size: { width: '300px', height: '30px', margin: '5px' },
      }}
      inputCustom={{
        value: tagValue,
        onChange: tagValueHandler,
        placeholder: 'Add Tag',
        size: { width: '200px', height: '30px', margin: '5px' },
      }}
    />
  );
};

export default AddTagForm;
