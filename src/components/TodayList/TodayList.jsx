import React, { useEffect } from 'react';
import {
  TodayTitle,
  AddLink,
  SvgPlus,
  WaterList,
  TodayListContainer,
} from './TodayList.styled';
import TodayItem from 'components/TodayItem/TodayItem';
import sprite from '../../images/SVG/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getWaterOperation } from '../../redux/water/waterOperations';
import { selectTodayList } from '../../redux/selectors';
import { openModalAdd } from '../../redux/modal/modalSlice';

const plusIcon = `${sprite}#icon-plus-small`;

const TodayList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWaterOperation(new Date()));
  }, [dispatch]);

  const todayList = useSelector(selectTodayList);

  return (
    <TodayListContainer>
      <TodayTitle>Today</TodayTitle>
      <WaterList>
        {todayList.map(item => (
          <TodayItem
            key={item._id}
            water={item.waterVolume}
            date={new Date(item.date)}
            id={item._id}
          />
        ))}
        <AddLink onClick={() => dispatch(openModalAdd())}>
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
