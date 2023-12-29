import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWater } from '..//../redux/water/operations';

// getWater(formatDate).then(console.log);

const TestComponent = () => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const formatDate = currentDate.toISOString();
  const formatDate2 = formatDate.slice(0, -5);
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
  const match = regex.test(formatDate);
  console.log(match);

  console.log(formatDate2);
  dispatch(getWater({ date: formatDate2 }));

  return <div>TestComponent</div>;
};

export default TestComponent;
