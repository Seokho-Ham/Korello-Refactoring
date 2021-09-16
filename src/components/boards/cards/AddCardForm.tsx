import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardApi from '../../../api/board';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { setCardAction } from '../../../reducers/board';
import AddForm from '../../common/AddForm';

const AddCardForm = ({ tagValue }: { tagValue: string }) => {
  const dispatch = useDispatch();
  const { currentBoardId, cardList } = useSelector((state: RootState) => state.boardReducer);
  const [cardName, setCardName, cardNameHandler] = useInput('');
  const [status, setStatus] = useState(false);

  const submitHandler = async () => {
    if (cardName.length === 0) {
      alert('카드 제목을 작성해주세요.');
    } else {
      const { result_body } = await BoardApi.addCard(currentBoardId, {
        name: cardName,
        tagValue,
        members: [''],
        linkId: cardList[tagValue]
          ? Number(cardList[tagValue][cardList[tagValue].length - 1].id)
          : 0,
      });
      const list = { ...cardList };
      if (list[tagValue]) {
        list[tagValue].push(result_body);
      } else {
        list[tagValue] = [result_body];
      }
      dispatch(setCardAction(list));
      setCardName('');
      setStatus(!status);
    }
  };

  const onClickHandler = () => {
    setStatus(!status);
  };
  return (
    <AddForm
      formCustom={{
        status,
        size: { flexDirection: 'column', alignItems: 'flex-start', margin: '10px' },
      }}
      buttonCustom={{
        children: 'Add Card',
        submit: submitHandler,
        onClick: onClickHandler,
        size: { width: '300px', height: '30px' },
      }}
      inputCustom={{
        value: cardName,
        onChange: cardNameHandler,
        placeholder: 'Add Card',
        size: { width: '290px', height: '30px', margin: '5px' },
      }}
    />
  );
};

export default AddCardForm;
