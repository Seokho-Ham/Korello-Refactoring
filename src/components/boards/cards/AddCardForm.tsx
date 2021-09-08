import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BoardApi from '../../../api/board';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { setCardAction } from '../../../reducers/board';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { BoardForm } from '../../main/AddBoardForm';

const AddCardForm = ({ tagValue }: { tagValue: string }) => {
  const dispatch = useDispatch();
  const { currentBoardId, cardList } = useSelector((state: RootState) => state.boardReducer);
  const [cardName, setCardName, cardNameHandler] = useInput('');
  const [status, setStatus] = useState(false);

  const submitHandler = async () => {
    if (cardName.length === 0) {
      alert('카드 제목을 작성해주세요.');
    } else {
      const { result_body } = await BoardApi.addCard(currentBoardId, {
        name: cardName,
        tagValue,
        members: [''],
        order: cardList[tagValue] ? cardList[tagValue].length : 0,
      });
      const list = { ...cardList };
      if (list[tagValue]) {
        list[tagValue].push(result_body);
      } else {
        list[tagValue] = [result_body];
      }
      dispatch(setCardAction(list));
      setCardName('');
      setStatus(!status);
    }
  };

  const onClickHandler = () => {
    setStatus(!status);
  };
  return (
    <Wrapper>
      <CardForm status={status}>
        <Input
          value={cardName}
          onChange={cardNameHandler}
          custom={{ width: '250px', height: '30px' }}
        />
        <FormButtonContainer>
          <Button
            {...{
              btType: 'add',
              size: { width: '50px', height: '25px', margin: '5px' },
            }}
            onClick={submitHandler}
          >
            Add
          </Button>
          <Button
            {...{
              btType: 'cancel',
              size: { width: '50px', height: '25px', margin: '5px' },
            }}
            onClick={onClickHandler}
          >
            Cancel
          </Button>
        </FormButtonContainer>
      </CardForm>
      <Button
        {...{ size: { width: '300px', height: '30px' }, visible: status }}
        onClick={onClickHandler}
      >
        Add Card
      </Button>
    </Wrapper>
  );
};

export default AddCardForm;

const Wrapper = styled.div``;

const CardForm = styled(BoardForm)`
  display: ${props => (props.status ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  width: 290px;
  height: 100%;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.color.grey2};
`;
const FormButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
