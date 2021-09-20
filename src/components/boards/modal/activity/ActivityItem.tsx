import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
const ActivityItem = ({
  message,
  name,
  createdTime,
}: {
  message: string;
  name: string;
  createdTime: string;
}) => {
  return (
    <Container>
      <CgProfile size='28px' />
      <Profile>
        <Content>
          {name}이 {message}
        </Content>
        <div>{createdTime}</div>
      </Profile>
    </Container>
  );
};

export default ActivityItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px;
`;

const Profile = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  font-size: 14px;
  margin: 5px 0px;
`;
