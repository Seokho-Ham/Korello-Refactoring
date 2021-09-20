import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import BoardApi from '../../../api/board';
import { LocationState } from '../../../pages/BoardPage';
import { RootState } from '../../../reducers';
import { setCardAction, setCurrentCardAction } from '../../../reducers/board';
import Button from '../../common/Button';

const ModalDeleteButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { currentBoardId, cardList, currentCard } = useSelector(
    (state: RootState) => state.boardReducer,
  );
  const deleteHandler = async () => {
    if (window.confirm('카드를 삭제하시겠습니까?')) {
      const isLast =
        cardList[currentCard.tagValue][cardList[currentCard.tagValue].length - 1].id ===
        currentCard.id
          ? true
          : false;
      await BoardApi.deleteCard(currentBoardId, { id: currentCard.id, isLast });
      const list = { ...cardList };
      let linkId = 0;
      const updatedList = list[currentCard.tagValue].filter(el => {
        if (el.id === currentCard.id) {
          linkId = el.linkId;
        } else if (el.linkId === Number(currentCard.id)) {
          return (el.linkId = linkId);
        }
        if (el.id !== currentCard.id) return el;
      });
      list[currentCard.tagValue] = updatedList;
      list['rawData'] = list['rawData'].filter(el => el.id !== currentCard.id);
      dispatch(setCardAction(list));
      dispatch(
        setCurrentCardAction({
          id: '',
          name: '',
          tagValue: '',
          labelList: [],
          todoList: [],
          events: [],
          linkId: 0,
        }),
      );
      history.push(location.state.background.pathname);
    }
  };

  return (
    <Wrapper>
      <Button btType='cancel' size={{ padding: '7px' }} onClick={deleteHandler}>
        Delete
      </Button>
    </Wrapper>
  );
};

export default ModalDeleteButton;

const Wrapper = styled.div`
  float: right;
  margin: 8px 4px;
`;
