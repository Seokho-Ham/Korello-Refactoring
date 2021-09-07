import React from 'react';
import styled from 'styled-components';
import ModalMain from './ModalMain';
import ModalSidebar from './ModalSidebar';

const CardModal = () => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>모달</ModalHeader>
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
