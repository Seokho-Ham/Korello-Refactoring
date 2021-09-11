import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BoardApi from '../../../../../api/board';
import {
  CurrentCard,
  setBoardLabelAction,
  setCurrentCardAction,
} from '../../../../../reducers/board';
import { CgClose } from 'react-icons/cg';
import { RootState } from '../../../../../reducers';

const LabelItem = ({
  id,
  name,
  color,
  added,
  currentCard,
}: {
  id: string;
  name: string;
  color: string;
  added: boolean;
  currentCard: CurrentCard;
}) => {
  const dispatch = useDispatch();
  const { currentBoardId, boardLabelList } = useSelector((state: RootState) => state.boardReducer);

  const deleteLabelHandler = async () => {
    if (window.confirm('라벨을 삭제 하시겠습니까?')) {
      await BoardApi.deleteBoardLabel(currentBoardId, id);
      const list = boardLabelList.slice().filter(el => el.id !== id);
      dispatch(setBoardLabelAction(list));
      if (added) {
        const card = { ...currentCard };
        card.labelList = card.labelList.filter(el => el.id !== id);
        dispatch(setCurrentCardAction(card));
      }
    }
  };
  const addLabelToCard = async () => {
    const { result_code } = added
      ? await BoardApi.deleteCardLabel(currentCard.id, { labelIds: [id] })
      : await BoardApi.addCardLabel(currentCard.id, { labelId: id });
    if (result_code === 201) {
      const card = { ...currentCard };
      card.labelList.push({ id, name, color });
      dispatch(setCurrentCardAction(card));
    } else {
      const card = { ...currentCard };
      card.labelList = card.labelList.filter(el => el.id !== id);
      dispatch(setCurrentCardAction(card));
    }
  };

  return (
    <Container {...{ color, added }}>
      <Title onClick={addLabelToCard}>{name}</Title>
      <CgClose size='15px' onClick={deleteLabelHandler} />
    </Container>
  );
};

export default LabelItem;

const Container = styled.div<{ color: string; added: boolean }>`
  display: flex;
  align-items: center;
  width: 95%;
  height: 2.5rem;
  margin: 3px;
  color: ${({ color }) => (color !== 'white' ? 'white' : 'black')};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ added }) => (added ? '-8px 0 #97a0af' : 'none')};
  background-color: ${({ color }) => color};
  svg {
    color: ${({ color }) => (color !== 'white' ? 'black' : 'white')};
    margin-right: 5px;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const Title = styled.div`
  font-size: 14px;
  margin-left: 5px;
  flex-grow: 1;
`;
