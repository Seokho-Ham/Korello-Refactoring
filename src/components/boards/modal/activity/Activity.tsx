import React from 'react';
import styled from 'styled-components';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import ActivityItem from './ActivityItem';
const Activity = () => {
  return (
    <Container>
      <Header>
        <AiOutlineUnorderedList size='28' />
        <div>Activity</div>
      </Header>
      <List>
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </List>
    </Container>
  );
};

export default Activity;

const Container = styled.div`
  margin: 10px;
`;

const Header = styled.div`
  font-size: ${({ theme }) => theme.font.large};

  div {
    margin: 0px 5px;
    display: inline-block;
    position: relative;
    top: -6px;
  }
`;

const List = styled.div``;
