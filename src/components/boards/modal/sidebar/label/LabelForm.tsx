import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../common/Button';
import { ColorResult, TwitterPicker } from 'react-color';
import Input from '../../../../common/Input';
import useInput from '../../../../../hooks/useInput';
import BoardApi from '../../../../../api/board';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../reducers';
import { setBoardLabelAction } from '../../../../../reducers/board';
const LabelForm = () => {
  const { boardLabelList, currentBoardId } = useSelector((state: RootState) => state.boardReducer);
  const [labelTitle, setLabelTitle, labelTitleHandler] = useInput('');
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = async () => {
    if (labelTitle.length === 0 || color.length === 0) {
      alert('제목과 색상을 선택해주세요!');
    } else {
      const { result_body } = await BoardApi.addBoardLabel(currentBoardId, {
        name: labelTitle,
        color,
      });
      const list = boardLabelList.slice();
      list.push(result_body);
      dispatch(setBoardLabelAction(list));
      setLabelTitle('');
      setColor('');
      setStatus(!status);
    }
  };
  const onClickHandler = () => {
    setStatus(!status);
  };
  const onColorChangeHandler = (color: ColorResult) => {
    setColor(color.hex);
  };
  useEffect(() => {
    if (status && inputRef.current) {
      console.log('focused');
      inputRef.current.focus();
    }
  }, [status]);
  return (
    <FormWrapper>
      <FormContainer {...{ visible: status }}>
        <TwitterPicker color={color} onChangeComplete={onColorChangeHandler} width='95%' />
        <Input
          value={labelTitle}
          placeholder='Add Label'
          onChange={labelTitleHandler}
          custom={{ width: '95%', height: '30px', margin: '5px 0px' }}
          customRef={inputRef}
        />
        <FormButtonContainer>
          <Button
            {...{
              btType: 'add',
              size: { width: '60px', height: '30px', margin: '5px' },
            }}
            onClick={submitHandler}
          >
            Add
          </Button>
          <Button
            {...{
              btType: 'cancel',
              size: { width: '60px', height: '30px', margin: '5px' },
            }}
            onClick={onClickHandler}
          >
            Cancel
          </Button>
        </FormButtonContainer>
      </FormContainer>
      <Button
        {...{ visible: status, size: { width: '14.5rem', height: '30px', margin: '3px' } }}
        onClick={onClickHandler}
      >
        Add Label
      </Button>
    </FormWrapper>
  );
};

export default LabelForm;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const FormContainer = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
