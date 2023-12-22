import React from 'react';
import {
  WaterItem,
  WaterText,
  TimeText,
  ConfigIcons,
  ButtonPen,
  ButtonTrash,
  SvgPen,
  SvgTrash,
} from './TodayItem.styled';
import sprite from '../../icons/sprite.svg';

const editIcon = `${sprite}#icon-pen`;
const delIcon = `${sprite}#icon-trash`;

const TodayItem = ({ water, date }) => {
  const time = `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  return (
    <WaterItem>
      <svg width={26} height={26}>
        <use href={`${sprite}#icon-glass`}></use>
      </svg>
      <WaterText>{`${water} ml`}</WaterText>
      <TimeText>{time}</TimeText>

      <ConfigIcons>
        <ButtonPen>
          <SvgPen>
            <use href={editIcon}></use>
          </SvgPen>
        </ButtonPen>
        <ButtonTrash>
          <SvgTrash>
            <use href={delIcon}></use>
          </SvgTrash>
        </ButtonTrash>
      </ConfigIcons>
    </WaterItem>
  );
};

export default TodayItem;
