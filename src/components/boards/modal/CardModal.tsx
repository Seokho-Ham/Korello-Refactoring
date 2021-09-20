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
import EventApi from '../../../api/event';
import ModalTitle from './ModalTitle';
import ModalDeleteButton from './ModalDeleteButton';

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
          tagValue: '',
          labelList: [],
          todoList: [],
          events: [],
          linkId: 0,
        }),
      );
      history.push(location.state.background.pathname);
    }
  };

  useEffect(() => {
    (async () => {
      const cardId = location.pathname.split('/').pop() || '';

      if (Object.keys(cardList).length !== 0 && currentCard.id !== cardId) {
        const { result_body } = await TodoApi.getCardTodoList(cardId);
        const data = await EventApi.getCardsEvents(cardId);
        const { id, name, labels, linkId, tagValue } = cardList.rawData.filter(
          el => el.id === cardId,
        )[0];
        data.result_body.forEach((el: any) => {
          el.createdDate = new Date(
            el.createdDate[0],
            el.createdDate[1] + 1,
            el.createdDate[2],
            el.createdDate[3],
            el.createdDate[4],
            el.createdDate[5],
          );
        });
        dispatch(
          setCurrentCardAction({
            id,
            name,
            tagValue,
            labelList: labels,
            todoList: result_body,
            events: data.result_body,
            linkId,
          }),
        );
      }
    })();
  }, [cardList]);

  return (
    <ModalBackground className='modal-wrapper' onClick={closeModal}>
      <ModalWrapper>
        <ModalContainer>
          {Object.keys(cardList).length !== 0 ? (
            <>
              <ModalHeader>
                <Title>
                  <BiCard size='32px' /> <ModalTitle cardName={currentCard.name} />
                  <Link
                    to={location.state.background.pathname}
                    style={{ float: 'right', margin: '8px 4px' }}
                  >
                    <CgClose size='25px' />
                  </Link>
                  <ModalDeleteButton />
                </Title>
                <LabelListContainer>
                  {currentCard.labelList.map(el => {
                    return (
                      <Label key={el.id} {...{ color: el.color }}>
                        <div>{el.name}</div>
                      </Label>
                    );
                  })}
                </LabelListContainer>
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
    </ModalBackground>
  );
};

export default CardModal;

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  background-color: #000000a3;
`;
const ModalWrapper = styled.div`
  margin: 40px 0px 80px;
`;
const ModalContainer = styled.div`
  background-color: #f4f5f7;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  z-index: 3;
  width: 60rem;
  min-height: 70rem;
  color: #172b4d;
`;

const ModalHeader = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const ModalContents = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin: 7px;
  height: 40px;
`;

const LabelListContainer = styled.div`
  display: flex;
  height: 70px;
`;
const Label = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  min-width: 60px;
  height: 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ color }) => color};
  text-align: center;
  font-size: ${({ theme }) => theme.font.medium};
`;
