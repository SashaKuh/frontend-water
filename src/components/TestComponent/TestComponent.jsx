import React from 'react';
import { useDispatch } from 'react-redux';
import {
  getWaterOperation,
  addWaterOperation,
  getMonthWaterOperation,
} from '../../redux/water/waterOperations.js';

const TestComponent = () => {
  const dispatch = useDispatch();

  //   dispatch(getMonthWaterOperation(new Date()));
  dispatch(getWaterOperation(new Date()));

  //   dispatch(addWaterOperation({ waterVolume: 300, date: new Date() }));
  return <div>TestComponent</div>;
};

export default TestComponent;
