import React from 'react';
import { TaDLayout } from './TodayAndMonthLayout.styled';
import TodayList from 'components/TodayList/TodayList';
import MonthList from 'components/MonthList/MonthList';

const TodayAndMonthLayout = () => {
  return (
    <TaDLayout>
      <TodayList />
      <MonthList />
    </TaDLayout>
  );
};

export default TodayAndMonthLayout;
