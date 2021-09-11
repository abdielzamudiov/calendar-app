import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { discardDate, selectDate } from '../redux/actions';

const DayTd = styled.td`
  padding: 2rem;
  cursor: pointer;
`;

const Selected = styled.span`
  padding: 5px 10px 5px 10px;
  background-color: red;
  color: white;
  border-radius: 1rem;
`;

const NotSelected = styled.span`
  padding: 5px 10px 5px 10px;
`;


export const Day = ({ day }) => {

  const selectedDate = useSelector((state) => state.selectedDate);
  const month = useSelector((state) => state.month.index )

  const dispatch = useDispatch();

  const weekend = (day.getDay() === 6 || day.getDay() === 0) ? .7 : 1;

  const notInMonth = day.getMonth() !== month ? "grey" : null;

  const handleClick = () => {
    selectedDate?.toLocaleDateString() === day.toLocaleDateString() 
      ? dispatch(discardDate())
      : dispatch(selectDate(day));
  };

  return (
    <DayTd onClick={() => handleClick()} style={{opacity: weekend, backgroundColor: notInMonth}}>
      {
        selectedDate?.toLocaleDateString() === day.toLocaleDateString() 
          ? <Selected>{day.getDate()}</Selected>
          : <NotSelected>{day.getDate()}</NotSelected>
      }
    </DayTd>
  )
};
