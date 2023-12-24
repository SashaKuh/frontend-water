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
  GlassIcon,
} from './TodayItem.styled';
import spriteDel from '../../icons/sprite.svg';
import sprite from '../../images/SVG/symbol-defs.svg';

const editIcon = `${sprite}#icon-pencil`;
const delIcon = `${sprite}#icon-trash`;
const glassIcon = `${spriteDel}#icon-glass`;

const TodayItem = ({ water, date }) => {
  const time = `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  return (
    <WaterItem>
      <GlassIcon>
        <use href={glassIcon}></use>
      </GlassIcon>
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
