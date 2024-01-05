import React from 'react';
import {
  DayDetailsCont,
  DateText,
  OtherText,
  ValueSpan,
  SvgClose,
  CloseButton,
} from './DayDetails.styled.';
import sprite from '../../images/SVG/symbol-defs.svg';

const plusIcon = `${sprite}#icon-plus-small`;

const DayDetails = ({
  date,
  dailyNorma,
  completed,
  serving,
  side,
  setModal,
}) => {
  return (
    <DayDetailsCont className={side}>
      <CloseButton onClick={() => setModal('')}>
        <SvgClose>
          <use href={plusIcon}></use>
        </SvgClose>
      </CloseButton>
      <DateText>{date}</DateText>
      <OtherText>
        Daily norma: <ValueSpan>{`${dailyNorma} L`}</ValueSpan>
      </OtherText>
      <OtherText>
        Fulfillment of the daily norm:
        <ValueSpan>{` ${completed}%`}</ValueSpan>
      </OtherText>
      <OtherText>
        How many servings of water:
        <ValueSpan>{` ${serving}`}</ValueSpan>
      </OtherText>
    </DayDetailsCont>
  );
};

export default DayDetails;
