import React from 'react'
import styled from 'styled-components';
import { Day } from './Day';

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
        <tr key={index}>
          {week?.map( (day, index) => (
            <Day key={index} day={day}/>
          ))}
        </tr>
      ) )}
      </tbody>
    </DaysContainer>
  );
}
