import React from 'react';
import Button from '../../../common/Button';

const LabelButton = ({ size }: { size: {} }) => {
  const onClick = () => {
    console.log('라벨 버튼');
  };
  return (
    <div>
      <Button size={size} onClick={onClick}>
        Label
      </Button>
    </div>
  );
};

export default LabelButton;
