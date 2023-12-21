import React from 'react';
import { WaterItem, WaterText, TimeText } from './TodayItem.styled';
import sprite from '../../icons/sprite.svg';

const TodayItem = ({ water, date }) => {
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <WaterItem>
      <svg width={26} height={26}>
        <use href={`${sprite}#icon-glass`}></use>
      </svg>
      <WaterText>{`${water} ml`}</WaterText>
      <TimeText>{time}</TimeText>
    </WaterItem>
  );
};

export default TodayItem;
