import React, { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../common/Button';
import LabelModal from './LabelModal';

const LabelButton = ({
  size,
  openedState,
  viewHandler,
}: {
  size: {};
  openedState: string;
  viewHandler: (name: string) => void;
}) => {
  const onClick = () => {
    if (openedState !== 'label') {
      viewHandler('label');
    } else {
      viewHandler('');
    }
  };
  return (
    <Container>
      <Button size={size} onClick={onClick}>
        Label
      </Button>
      {openedState === 'label' && <LabelModal />}
    </Container>
  );
};

export default LabelButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
