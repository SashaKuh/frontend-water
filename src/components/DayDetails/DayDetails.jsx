import React from 'react';
import {
  DayDetailsCont,
  DateText,
  OtherText,
  ValueSpan,
} from './DayDetails.styled.';

const DayDetails = () => {
  return (
    <DayDetailsCont>
      <DateText>{`${exampleProps.date.getDay()}, ${
        months[exampleProps.date.getMonth()]
      }`}</DateText>
      <OtherText>
        Daily norma: <ValueSpan>{` ${exampleProps.daily} L`}</ValueSpan>
      </OtherText>
      <OtherText>
        Fulfillment of the daily norm:
        <ValueSpan>{` ${exampleProps.part}%`}</ValueSpan>
      </OtherText>
      <OtherText>
        How many servings of water:
        <ValueSpan>{` ${exampleProps.count}`}</ValueSpan>
      </OtherText>
    </DayDetailsCont>
  );
};

const exampleProps = {
  date: new Date(),
  daily: 1.5,
  part: 90,
  count: 5,
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

export default DayDetails;
