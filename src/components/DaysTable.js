import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextMonth, nextYear, prevMonth, prevYear } from '../redux/actions'
import styled from 'styled-components';

const DaysContainer = styled.table`

`;

export const DaysTable = ({ weeks, ...props }) => {


  return (
    <DaysContainer {...props}>
      {weeks?.map( (week, index) => (
        <tr>
          {week?.map( (day, index) => (
            <td>
              {day.getDate()}
            </td>
          ))}
        </tr>
      ) )}
    </DaysContainer>
  );

  // return (
  //   <div>
  //     <br/>
  //     <button onClick={()=> dispatch(nextYear())} >next year</button>
  //     <br/>
  //     <button onClick={() => dispatch(nextMonth())}>next month</button>
  //     <br/>
  //     <button onClick={() => dispatch(prevMonth())} >prev month</button>
  //     <br/>
  //     <button onClick={() => dispatch(prevYear())} >prev year</button>
  //   </div>
  // )
}
