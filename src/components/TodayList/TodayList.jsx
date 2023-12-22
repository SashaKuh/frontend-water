import React from 'react';
import {
  TodayTitle,
  AddLink,
  Svg,
  WaterList,
  TodayListContainer,
} from './TodayList.styled';
import TodayItem from 'components/TodayItem/TodayItem';
import { nanoid } from 'nanoid';
import sprite from '../../icons/sprite.svg';

const plusRef = `${sprite}#icon-plus`;

const testArrayDayWater = [
  { water: 200, date: new Date() },
  { water: 400, date: new Date() },
  { water: 350, date: new Date() },
  { water: 200, date: new Date() },
  { water: 400, date: new Date() },
  { water: 350, date: new Date() },
  { water: 200, date: new Date() },
  { water: 400, date: new Date() },
  { water: 350, date: new Date() },
];

const TodayList = () => {
  return (
    <TodayListContainer>
      <TodayTitle>Today</TodayTitle>
      <WaterList>
        {testArrayDayWater.map(item => (
          <TodayItem key={nanoid()} water={item.water} date={item.date} />
        ))}
        <AddLink>
          <Svg>
            <use xlinkHref={plusRef}></use>
          </Svg>
          <span>Add water</span>
        </AddLink>
      </WaterList>
    </TodayListContainer>
  );
};

export default TodayList;
