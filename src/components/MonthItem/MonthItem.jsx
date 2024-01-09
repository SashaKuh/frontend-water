import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  DayButtonFull,
  DayButtonPart,
  DayCompleted,
  MonthItemStyled,
} from './MonthItem.styled';
import { DayDetails } from 'components/DayDetails/DayDetails';
import { selectNewCompleted } from '../../redux/selectors';

export const MonthItem = ({
  date,
  completed,
  dailyNorma,
  servings,
  modal,
  setModal,
  isCurrentMonth,
}) => {
  const day = date.split(' ')[1];
  const isToday = day === new Date().getDate().toString() && isCurrentMonth;
  const newCompleted = useSelector(selectNewCompleted);
  const newCompletedFormat = newCompleted >= 100 ? 100 : newCompleted;
  const dispatch = useDispatch();
  const Button = completed >= 100 ? DayButtonFull : DayButtonPart;
  const completedFormat = completed >= 100 ? 100 : completed;
  const leftOrRigth = isRight(day);
  return (
    <MonthItemStyled>
      {modal === day && (
        <DayDetails
          date={date}
          dailyNorma={dailyNorma}
          completed={isToday ? newCompleted : completedFormat}
          servings={servings}
          side={leftOrRigth}
          setModal={setModal}
          statusModal={modal}
        />
      )}
      <Button onClick={() => dispatch(setModal(day))} className="dateButton">
        {day}
      </Button>
      <DayCompleted>{`${
        isToday ? newCompletedFormat : completedFormat
      }%`}</DayCompleted>
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
