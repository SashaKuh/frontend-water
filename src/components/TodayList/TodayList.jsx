import React from 'react';
import {
  TodayTitle,
  AddLink,
  SvgPlus,
  WaterList,
  TodayListContainer,
} from './TodayList.styled';
import TodayItem from 'components/TodayItem/TodayItem';
import { nanoid } from 'nanoid';
import sprite from '../../images/SVG/symbol-defs.svg';

const plusIcon = `${sprite}#icon-plus-small`;

const testArrayDayWater = [];

for (let i = 0; i <= 10; i += 1) {
  testArrayDayWater[i] = { id: nanoid(), water: 200, date: new Date() };
}

const TodayList = () => {
  return (
    <TodayListContainer>
      <TodayTitle>Today</TodayTitle>
      <WaterList>
        {testArrayDayWater.map(item => (
          <TodayItem key={nanoid()} water={item.water} date={item.date} />
        ))}
        <AddLink>
          <SvgPlus>
            <use xlinkHref={plusIcon}></use>
          </SvgPlus>
          <span>Add water</span>
        </AddLink>
      </WaterList>
    </TodayListContainer>
  );
};

export default TodayList;
