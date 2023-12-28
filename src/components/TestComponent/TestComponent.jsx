import React from 'react';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { getWater, addWater } from '../../redux/water/operations';
// getWater(formatDate).then(console.log);

const TestComponent = () => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const formatDate = moment(currentDate).format('YYYY-MM-DDTHH:mm:ss');
  console.log(formatDate);
  addWater({ water: 300, date: formatDate }).then(console.log);
  return <div>TestComponent</div>;
};

export default TestComponent;
