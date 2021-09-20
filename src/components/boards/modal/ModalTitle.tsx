import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BoardApi from '../../../api/board';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { setCardAction, setCurrentCardAction } from '../../../reducers/board';
import Button from '../../common/Button';
import Input from '../../common/Input';

const ModalTitle = ({ cardName }: { cardName: string }) => {
  const { currentBoardId, currentCard, cardList } = useSelector(
    (state: RootState) => state.boardReducer,
  );

  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle, titleHandler] = useInput(cardName);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickHandler = () => {
    setVisible(!visible);
  };
  const submitHandler = async () => {
    if (title.length === 0) {
      alert('제목을 입력해주요');
    } else if (title === cardName) {
      setVisible(!setVisible);
    } else {
      await BoardApi.changeCardTitle(currentBoardId, {
        id: currentCard.id,
        name: title,
      });
      const updatedList = { ...cardList };
      const card = updatedList[currentCard.tagValue].filter(el => {
        if (currentCard.id === el.id) {
          el.name = title;
          return el;
        }
      })[0];

      const updatedCard = { ...currentCard };
      updatedCard.name = card.name;

      dispatch(setCardAction(updatedList));
      dispatch(setCurrentCardAction(updatedCard));
      setTitle(updatedCard.name);
      setVisible(!visible);
    }
  };
  useEffect(() => {
    if (visible && inputRef.current) {
      setTitle(cardName);
      inputRef.current.focus();
    }
  }, [visible]);

  return (
    <Wrapper>
      {visible ? (
        <FormContainer>
          <Input
            value={title}
            onChange={titleHandler}
            customRef={inputRef}
            custom={{ height: '30px' }}
          />
          <FormButtonContainer>
            <Button
              {...{
                btType: 'add',
                size: { width: '60px', height: '30px', margin: '5px' },
              }}
              onClick={submitHandler}
            >
              Add
            </Button>
            <Button
              {...{
                btType: 'cancel',
                size: { width: '60px', height: '30px', margin: '5px' },
              }}
              onClick={onClickHandler}
            >
              Cancel
            </Button>
          </FormButtonContainer>
        </FormContainer>
      ) : (
        <div onClick={onClickHandler}>{cardName}</div>
      )}
    </Wrapper>
  );
};

export default ModalTitle;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  top: -8px;
  margin: 0px 10px;
  font-size: ${({ theme }) => theme.font.x_large};
`;

const FormButtonContainer = styled.div``;
