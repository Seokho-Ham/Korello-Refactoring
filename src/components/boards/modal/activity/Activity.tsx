import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import ActivityItem from './ActivityItem';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers';
const Activity = () => {
  const { currentCard } = useSelector((state: RootState) => state.boardReducer);

  return (
    <Container>
      <Header>
        <AiOutlineUnorderedList size='28' />
        <div>Activity</div>
      </Header>
      <List>
        {currentCard.events.length > 0 &&
          currentCard.events
            .sort((a: any, b: any) => b.createdDate - a.createdDate)
            .map(el => {
              const date = el.createdDate.toDateString();
              return (
                <ActivityItem
                  key={el.id}
                  createdTime={date}
                  message={el.message}
                  name={el.memberName}
                />
              );
            })}
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
