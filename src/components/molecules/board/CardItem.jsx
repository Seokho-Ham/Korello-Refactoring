import React from 'react';
import styled from 'styled-components';
const CardItem = () => {
  return <CardItemContainer>카드 아이템</CardItemContainer>;
};

export default CardItem;

const CardItemContainer = styled.div`
  min-height: 60px;
  max-height: 100px;
  border: 1px solid grey;
  margin: 5px;
`;
