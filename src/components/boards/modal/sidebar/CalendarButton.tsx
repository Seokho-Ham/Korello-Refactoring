import React from 'react';
import Button from '../../../common/Button';

const CalendarButton = ({
  size,
  openedState,
  viewHandler,
}: {
  size: {};
  openedState: string;
  viewHandler: (name: string) => void;
}) => {
  const onClick = () => {
    if (openedState !== 'calendar') {
      viewHandler('calendar');
    } else {
      viewHandler('');
    }
  };
  return (
    <div>
      <Button size={size} onClick={onClick}>
        Calendar
      </Button>
    </div>
  );
};

export default CalendarButton;
