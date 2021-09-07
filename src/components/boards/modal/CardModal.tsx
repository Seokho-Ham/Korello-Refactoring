import React from 'react';
import styled from 'styled-components';
import ModalMain from './ModalMain';
import ModalSidebar from './ModalSidebar';
import { BiCard } from 'react-icons/bi';
import { useLocation } from 'react-router';
import { LocationState } from '../../../pages/BoardPage';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
const CardModal = () => {
  const location = useLocation<LocationState>();

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          <Title>
            <BiCard size='32px' /> <div>Title</div>
            <Link to={location.state.background.pathname} style={{ float: 'right', margin: '8px' }}>
              <CgClose size='25px' />
            </Link>
          </Title>
        </ModalHeader>
        <ModalContents>
          <ModalMain />
          <ModalSidebar />
        </ModalContents>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default CardModal;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #000000a3;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.color.grey3};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  position: relative;
  top: 4rem;
  z-index: 3;
  width: 60rem;
  height: 60rem;
`;

const ModalHeader = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const ModalContents = styled.div`
  height: 90%;
  display: flex;
`;
const Title = styled.div`
  margin: 7px;
  div {
    display: inline-block;
    position: relative;
    top: -8px;
    margin: 0px 10px;
    font-size: ${({ theme }) => theme.font.x_large};
  }
`;
