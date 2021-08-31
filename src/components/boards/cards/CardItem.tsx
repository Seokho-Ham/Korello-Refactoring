import React from 'react';
import styled from 'styled-components';
const CardItem = () => {
  return <CardItemContainer>카드 아이템</CardItemContainer>;
};

export default CardItem;

const CardItemContainer = styled.div`
  min-height: 50px;
  max-height: 100px;
  background: #fff;
  margin: 5px;
  padding: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
