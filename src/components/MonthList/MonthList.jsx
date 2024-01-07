import React, { useEffect, useState } from 'react';
import {
  MonthTitle,
  DatePicker,
  SvgLeft,
  SvgRight,
  LeftArrowButton,
  RigthArrowButton,
  MonthHeader,
  MonthListStyled,
} from './MonthList.styled';
import sprite from '../../images/SVG/symbol-defs.svg';
import { MonthItem } from '../MonthItem/MonthItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthWaterOperation } from '../../redux/water/waterOperations';
import { selectManthList, selectModalDetails } from '../../redux/selectors';
import { setModalDetails } from '../../redux/modal/modalSlice';

const iconArrow = `${sprite}#icon-chevron-double-up`;

const MonthList = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const dailyNorma = useSelector(selectDailyNorma);

  const modalDetails = useSelector(selectModalDetails);

  useEffect(() => {
    dispatch(getMonthWaterOperation(date));
  }, [date, dispatch]);

  const firstArray = useSelector(selectManthList);

  const testArray = firstArray.map(item => {
    if (!item.date) {
      const newItem = { ...item };
      newItem.completed = 0;
      newItem.dailyNorma = dailyNorma / 1000;
      newItem.date = `${months[date.getMonth()]}, ${item._id}`;
      return newItem;
    }
    return item;
  });

  const isCurrentMonth =
    date.getMonth() === new Date().getMonth() &&
    date.getFullYear() === new Date().getFullYear();

  return (
    <div>
      <MonthHeader>
        <MonthTitle>Month</MonthTitle>
        <DatePicker>
          <LeftArrowButton onClick={() => downMonth(date, setDate)}>
            <SvgLeft>
              <use href={iconArrow}></use>
            </SvgLeft>
          </LeftArrowButton>
          <p>{`${months[date.getMonth()]}, ${date.getFullYear()}`}</p>
          <RigthArrowButton
            onClick={() => upMonth(date, setDate)}
            disabled={isCurrentMonth}
          >
            <SvgRight>
              <use href={iconArrow}></use>
            </SvgRight>
          </RigthArrowButton>
        </DatePicker>
      </MonthHeader>
      <MonthListStyled>
        {testArray.map(item => (
          <MonthItem
            key={item._id}
            date={item.date}
            completed={item.completed}
            servings={item.servings}
            dailyNorma={item.dailyNorma}
            modal={modalDetails}
            setModal={setModalDetails}
          />
        ))}
      </MonthListStyled>
    </div>
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
