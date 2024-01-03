import React from 'react';
import {
  DayButtonFull,
  DayButtonPart,
  DayCompleted,
  MonthItemStyled,
} from './MonthItem.styled';

const MonthItem = ({ date, completed }) => {
  const day = date.split(' ')[1];
  const Button = completed === 100 ? DayButtonFull : DayButtonPart;
  return (
    <MonthItemStyled>
      <Button>{day}</Button>
      <DayCompleted>{`${completed}%`}</DayCompleted>
    </MonthItemStyled>
  );
};

export default MonthItem;
