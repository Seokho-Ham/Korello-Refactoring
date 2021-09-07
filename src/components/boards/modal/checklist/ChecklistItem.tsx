import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
type ChecklistItemProps = {
  id: number;
  status: boolean;
  title: string;
};

const ChecklistItem = ({ id, status, title }: ChecklistItemProps) => {
  return (
    <ItemContainer>
      {status ? <MdCheckBox size='18px' /> : <MdCheckBoxOutlineBlank size='18px' />}
      <span>{title}</span>
    </ItemContainer>
  );
};

export default ChecklistItem;

const ItemContainer = styled.div`
  margin: 10px 0px;
  font-size: 16px;
  span {
    margin: 0px 10px;
  }
`;
