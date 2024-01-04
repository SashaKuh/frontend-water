import React, { useState } from 'react';
import {
  DayButtonFull,
  DayButtonPart,
  DayCompleted,
  MonthItemStyled,
} from './MonthItem.styled';
import DayDetails from 'components/DayDetails/DayDetails';

const MonthItem = ({
  date,
  completed,
  dailyNorma,
  serving,
  modal,
  setModal,
}) => {
  const day = date.split(' ')[1];
  const Button = completed === 100 ? DayButtonFull : DayButtonPart;
  const leftOrRigth = isRight(day);

  return (
    <MonthItemStyled>
      {modal === day && (
        <DayDetails
          date={date}
          dailyNorma={dailyNorma}
          completed={completed}
          serving={serving}
          side={leftOrRigth}
          setModal={setModal}
        />
      )}
      <Button onClick={() => setModal(day)}>{day}</Button>
      <DayCompleted>{`${completed}%`}</DayCompleted>
    </MonthItemStyled>
  );
};

const isRight = day => {
  const rightSide = ['6', '7', '8', '9', '0'];

  for (let sub of rightSide) {
    if (day.includes(sub)) {
      return 'right';
    }
  }
  return 'left';
};

export default MonthItem;
