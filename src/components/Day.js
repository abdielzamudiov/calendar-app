import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectDate } from '../redux/actions';

const DayTd = styled.td`
  padding: 2rem;
  cursor: pointer;
`;

const Selected = styled.span`
  background-color: red;
  color: white;
  border-radius: 1rem;
`;

export const Day = ({ day }) => {

  const selectedDate = useSelector((state) => state.selectedDate);
  const month = useSelector((state) => state.month.index )

  const dispatch = useDispatch();

  const weekend = (day.getDay() === 6 || day.getDay() === 0) ? .7 : 1;

  const notInMonth = day.getMonth() !== month ? "grey" : null;

  return (
    <DayTd onClick={() => {
      dispatch(selectDate(day));
      console.log("sies", day)
    }
    } style={{opacity: weekend, backgroundColor: notInMonth}}>
      {
        selectedDate.toLocaleDateString() === day.toLocaleDateString() 
          ? <Selected>{day.getDate()}</Selected>
          : <span>{day.getDate()}</span>
      }
    </DayTd>
  )
};
