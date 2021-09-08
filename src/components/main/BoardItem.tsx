import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import { deleteBoard } from '../../api/main';
import { useDispatch } from 'react-redux';
import { deleteBoardAction, loading } from '../../reducers/main';
type BoardItemProps = {
  id: string;
  name: string;
};

const BoardItem: React.FC<BoardItemProps> = ({ id, name }) => {
  const dispatch = useDispatch();
  const deleteBoardItem = async () => {
    if (window.confirm(`${name} 보드를 삭제하시겠습니까?`)) {
      dispatch(loading());
      await deleteBoard({ id });
      dispatch(deleteBoardAction({ id }));
    }
  };

  return (
    <Container>
      <CgClose size='18px' onClick={deleteBoardItem} />
      <BoardItemWrapper to={`/board/${id}/cards`}>
        <BoardItemTitle>{name}</BoardItemTitle>
      </BoardItemWrapper>
    </Container>
  );
};

export default BoardItem;

const Container = styled.span`
  width: 200px;
  height: 100px;
  margin: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  svg {
    float: right;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const BoardItemWrapper = styled(Link)`
  display: block;
  width: 200px;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey3};
  }
`;

const BoardItemTitle = styled.div`
  padding: 5px 7px;
  font-size: ${({ theme }) => theme.font.medium};
`;
