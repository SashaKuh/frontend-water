import React from 'react';
import {
  DayButtonFull,
  DayButtonPart,
  DayCompleted,
  MonthItemStyled,
} from './MonthItem.styled';
import DayDetails from 'components/DayDetails/DayDetails';

export const MonthItem = ({
  date,
  completed,
  dailyNorma,
  servings,
  modal,
  setModal,
}) => {
  const day = date.split(' ')[1];

  const Button = completed >= 100 ? DayButtonFull : DayButtonPart;
  const completedFormat = completed >= 100 ? 100 : completed;
  const leftOrRigth = isRight(day);
  return (
    <MonthItemStyled>
      {modal === day && (
        <DayDetails
          date={date}
          dailyNorma={dailyNorma}
          completed={completedFormat}
          servings={servings}
          side={leftOrRigth}
          setModal={setModal}
          statusModal={modal}
        />
      )}
      <Button onClick={() => setModal(day)} className="dateButton">
        {day}
      </Button>
      <DayCompleted>{`${completedFormat}%`}</DayCompleted>
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
