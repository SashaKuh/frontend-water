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
import {
  addWaterOperation,
  getMonthWaterOperation,
} from '../../redux/water/waterOperations';
import { selectManthList } from '../../redux/selectors';

const iconArrow = `${sprite}#icon-chevron-double-up`;

// const testArray = [];

// for (let i = 0; i < 31; i += 1) {
//   testArray[i] = {
//     id: i,
//     serving: 3,
//     date: `December, ${i + 1}`,
//     dailyNorma: 2,
//     completed: i % 2 === 0 ? 90 : 100,
//   };
// }

const MonthList = () => {
  const [date, setDate] = useState(new Date());
  const [details, setDetails] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthWaterOperation(date));
  }, [date, dispatch]);

  const firstArray = useSelector(selectManthList);

  const testArray = firstArray.map(item => {
    if (!item.date) {
      const newItem = { ...item };
      newItem.servings = 0;
      newItem.completed = 0;
      newItem.dailyNorma = 2;
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
            serving={item.serving}
            dailyNorma={item.dailyNorma}
            modal={details}
            setModal={setDetails}
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
