import React, { MouseEvent, MouseEventHandler, useEffect } from 'react';
import styled from 'styled-components';
import ModalMain from './ModalMain';
import ModalSidebar from './ModalSidebar';
import { BiCard } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router';
import { LocationState } from '../../../pages/BoardPage';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { setCurrentCardAction } from '../../../reducers/board';
import TodoApi from '../../../api/todo';
import Loading from '../../common/Loading';

const CardModal = () => {
  const dispatch = useDispatch();
  const { cardList, currentCard } = useSelector((state: RootState) => state.boardReducer);
  const location = useLocation<LocationState>();
  const history = useHistory();
  const closeModal = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      dispatch(
        setCurrentCardAction({
          id: '',
          name: '',
          labelList: [],
          todoList: [],
          order: 0,
        }),
      );
      history.push(location.state.background.pathname);
    }
  };

  useEffect(() => {
    (async () => {
      const cardId = location.pathname.slice(-2);
      if (Object.keys(cardList).length !== 0 && currentCard.id !== cardId) {
        const { result_body } = await TodoApi.getCardTodoList(cardId);
        const { id, name, labels, order } = cardList.rawData.filter(el => el.id === cardId)[0];

        dispatch(
          setCurrentCardAction({ id, name, labelList: labels, todoList: result_body, order }),
        );
      }
    })();
  }, [cardList]);

  return (
    <ModalWrapper className='modal-wrapper' onClick={closeModal}>
      <ModalContainer>
        {Object.keys(cardList).length !== 0 ? (
          <>
            <ModalHeader>
              <Title>
                <BiCard size='32px' /> <div>{currentCard.name}</div>
                <Link
                  to={location.state.background.pathname}
                  style={{ float: 'right', margin: '8px' }}
                >
                  <CgClose size='25px' />
                </Link>
              </Title>
            </ModalHeader>
            <ModalContents>
              <ModalMain />
              <ModalSidebar />
            </ModalContents>
          </>
        ) : (
          <Loading />
        )}
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
  overflow: scroll;
`;

const ModalContainer = styled.div`
  background-color: #f4f5f7;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  position: relative;
  top: 4rem;
  z-index: 3;
  width: 60rem;
  height: 60rem;
  color: #172b4d;
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
