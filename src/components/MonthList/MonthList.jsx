import React, { useState } from 'react';
import {
  MonthTitle,
  DatePicker,
  SvgLeft,
  SvgRight,
  LeftArrowButton,
  RigthArrowButton,
  MonthHeader,
} from './MonthList.styled';
import sprite from '../../images/SVG/symbol-defs.svg';

const MonthList = () => {
  const [date, setDate] = useState(new Date());

  const isCurrentMonth = date.getMonth() === new Date().getMonth();

  return (
    <MonthHeader>
      <MonthTitle>Month</MonthTitle>
      <DatePicker>
        <LeftArrowButton onClick={() => downMonth(date, setDate)}>
          <SvgLeft>
            <use href={`${sprite}#icon-chevron-double-up`}></use>
          </SvgLeft>
        </LeftArrowButton>
        <p>{`${months[date.getMonth()]}, ${date.getFullYear()}`}</p>
        <RigthArrowButton
          onClick={() => upMonth(date, setDate)}
          disabled={isCurrentMonth}
        >
          <SvgRight>
            <use href={`${sprite}#icon-chevron-double-up`}></use>
          </SvgRight>
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
