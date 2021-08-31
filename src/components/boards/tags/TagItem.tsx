import React from 'react';
import styled from 'styled-components';
import { Tag } from '../../../assets/data';
import CardItem from '../cards/CardItem';

const TagItem = ({ id, title, cards }: Tag) => {
  return (
    <TagItemContainer>
      <TagTitle>{title}</TagTitle>
      <CardList>
        <CardItem />
      </CardList>
    </TagItemContainer>
  );
};

export default TagItem;

const TagItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  min-width: 300px;
  min-height: 50px;
  max-height: 90%;
  margin: 10px;
  padding: 5px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.color.grey2};
`;

const TagTitle = styled.div`
  height: 50px;
  margin: 5px;
  font-size: ${({ theme }) => theme.font.medium};
`;
const CardList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 5px;
`;
