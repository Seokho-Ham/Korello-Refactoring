import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
const ActivityItem = () => {
  return (
    <Container>
      <CgProfile size='28px' />
      <Profile>
        <Content>Name</Content>
        <div>Time</div>
      </Profile>
    </Container>
  );
};

export default ActivityItem;

const Container = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const Profile = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  font-size: ${({ theme }) => theme.font.medium};
`;
