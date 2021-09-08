import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Firebase from '../../../firebase';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../reducers';
import { setTagAction } from '../../../reducers/board';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { BoardForm } from '../../main/AddBoardForm';

const AddTagForm = () => {
  const { currentBoardId, tagList } = useSelector((state: RootState) => state.boardReducer);
  const [tagValue, setTagValue, tagValueHandler] = useInput('');
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const submitHandler = async () => {
    if (tagValue.length === 0) {
      alert('태그 제목을 입력해주세요.');
    } else {
      await Firebase.addTagStore(currentBoardId, tagValue, tagList.length);
      dispatch(setTagAction({ name: tagValue, order: tagList.length + 1 }));
      setTagValue('');
      setStatus(!status);
    }
  };
  const onClickHandler = () => {
    setStatus(!status);
  };

  return (
    <Wrapper>
      <TagForm status={status}>
        <Input
          value={tagValue}
          onChange={tagValueHandler}
          custom={{ width: '200px', height: '30px', margin: '5px' }}
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
      </TagForm>
      <Button
        {...{ size: { width: '300px', height: '30px' }, visible: status }}
        onClick={onClickHandler}
      >
        Add Tag
      </Button>
    </Wrapper>
  );
};

export default AddTagForm;

const Wrapper = styled.div`
  margin: 10px;
`;

const TagForm = styled(BoardForm)`
  display: ${props => (props.status ? 'flex' : 'none')};
  flex-direction: column;
  width: 300px;
`;

const FormButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
