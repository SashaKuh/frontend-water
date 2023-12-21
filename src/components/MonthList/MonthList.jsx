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

  const upMonth = () => {
    const newDate = new Date(date.getTime());
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  const downMonth = () => {
    const newDate = new Date(date.getTime());
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  return (
    <MonthHeader>
      <MonthTitle>Month</MonthTitle>
      <DatePicker>
        <LeftArrowButton onClick={downMonth}>
          <Svg>
            <use href={`${sprite}#icon-left-arrow`}></use>
          </Svg>
        </LeftArrowButton>
        <p>{`${months[date.getMonth()]}, ${date.getFullYear()}`}</p>
        <RigthArrowButton onClick={upMonth}>
          <Svg>
            <use href={`${sprite}#icon-right-arrow`}></use>
          </Svg>
        </RigthArrowButton>
      </DatePicker>
    </MonthHeader>
  );
};

export default MonthList;
