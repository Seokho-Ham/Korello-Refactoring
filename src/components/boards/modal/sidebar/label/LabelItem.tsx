import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import BoardApi from '../../../../../api/board';
import { CurrentCard, setCurrentCardAction } from '../../../../../reducers/board';

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
    <Container {...{ color, added }} onClick={addLabelToCard}>
      <Title>{name}</Title>
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
`;

const Title = styled.div`
  font-size: 14px;
  margin-left: 5px;
`;
