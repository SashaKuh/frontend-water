import React, { useState } from 'react';
import {
  MonthTitle,
  DatePicker,
  Svg,
  LeftArrowButton,
  RigthArrowButton,
  MonthHeader,
} from './MonthList.styled';
import sprite from '../../icons/sprite.svg';

const MonthList = () => {
  const [date, setDate] = useState(new Date());

  const isCurrentMonth = date.getMonth() === new Date().getMonth();

  return (
    <MonthHeader>
      <MonthTitle>Month</MonthTitle>
      <DatePicker>
        <LeftArrowButton onClick={() => downMonth(date, setDate)}>
          <Svg>
            <use href={`${sprite}#icon-left-arrow`}></use>
          </Svg>
        </LeftArrowButton>
        <p>{`${months[date.getMonth()]}, ${date.getFullYear()}`}</p>
        <RigthArrowButton
          onClick={() => upMonth(date, setDate)}
          disabled={isCurrentMonth}
        >
          <Svg>
            <use href={`${sprite}#icon-right-arrow`}></use>
          </Svg>
        </RigthArrowButton>
      </DatePicker>
    </MonthHeader>
  );
};

const upMonth = (date, setDate) => {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() + 1);
  setDate(newDate);
};

const downMonth = (date, setDate) => {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() - 1);
  setDate(newDate);
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default MonthList;
