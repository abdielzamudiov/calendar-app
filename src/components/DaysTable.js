import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextMonth, nextYear, prevMonth, prevYear } from '../redux/actions'
import styled from 'styled-components';

const daysOfWeek = [
  {id: 0, name:"Sunday"},
  {id: 1, name:"Monday"},
  {id: 2, name:"Tuesday"},
  {id: 3, name:"Wednesday"},
  {id: 4, name:"Thursday"},
  {id: 5, name:"Friday"},
  {id: 6, name:"Saturday"}
]

const DaysContainer = styled.table`

`;

export const DaysTable = ({ weeks, ...props }) => {


  return (
    <DaysContainer {...props}>
      <thead>
        <tr>
          {daysOfWeek.map((day) => (
            <td key={day.id}>
              {day.name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
      {weeks?.map( (week, index) => (
        <tr>
          {week?.map( (day, index) => (
            <td>
              {day.getDate()}
            </td>
          ))}
        </tr>
      ) )}
      </tbody>
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
