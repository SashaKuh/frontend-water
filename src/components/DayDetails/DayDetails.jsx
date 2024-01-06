import React, { useCallback, useEffect } from 'react';
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
  servings,
  side,
  setModal,
  statusModal,
}) => {
  const day = date.split(' ')[1];

  const handleClickOutside = useCallback(
    event => {
      if (
        !event.target.closest('.modalDetails') &&
        !event.target.classList.contains('dateButton')
      ) {
        setModal('');
      }
    },
    [setModal]
  );

  useEffect(() => {
    if (statusModal === day) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [day, handleClickOutside, statusModal]);

  return (
    <DayDetailsCont className={`${side} modalDetails`}>
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
        <ValueSpan>{` ${servings}`}</ValueSpan>
      </OtherText>
    </DayDetailsCont>
  );
};

export default DayDetails;
