import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../../../reducers';
import LabelForm from './LabelForm';
import LabelItem from './LabelItem';

const LabelModal = () => {
  const { boardLabelList, currentCard } = useSelector((state: RootState) => state.boardReducer);

  return (
    <Wrapper>
      <LabelListContainer>
        {boardLabelList.length !== 0
          ? boardLabelList.map(el => {
              const state: boolean =
                currentCard.labelList.filter(item => item.id === el.id).length > 0;
              return (
                <LabelItem
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  color={el.color}
                  added={state}
                  currentCard={currentCard}
                />
              );
            })
          : '라벨이 존재하지 않습니다.'}
      </LabelListContainer>
      <LabelForm />
    </Wrapper>
  );
};

export default LabelModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 10px 5px;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214;
  overflow: hidden;
  position: absolute;
  top: 40px;
  left: 0px;
  margin-bottom: 3px;
`;

const LabelListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
