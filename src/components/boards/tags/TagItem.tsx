import React from 'react';
import styled from 'styled-components';
import { Tag } from '../../../assets/data';
import CardItem from '../cards/CardItem';

const TagItem = ({ id, title, cards }: Tag) => {
  return (
    <TagItemContainer data-testId={id}>
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
  border: 1px solid green;
  overflow: hidden;
`;

const TagTitle = styled.div`
  height: 50px;
  margin: 5px;
  border: 1px solid grey;
`;
const CardList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 5px;
  border: 1px solid grey;
`;
