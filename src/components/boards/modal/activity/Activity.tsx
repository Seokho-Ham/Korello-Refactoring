import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import ActivityItem from './ActivityItem';
import EventApi from '../../../../api/event';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducers';
const Activity = () => {
  const { currentBoardId, currentCard } = useSelector((state: RootState) => state.boardReducer);
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const boardEvents = await EventApi.getBoardEvents(currentBoardId);
  //     const cardEvents = await EventApi.getBoardEvents(currentCard.id);
  //     console.log('boardEvents: ', boardEvents);
  //     console.log('cardEvents: ', cardEvents);
  //   };
  //   fetchEvents();
  // }, []);

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
