import React from 'react'
import styled from 'styled-components'
import { nextMonth, nextYear, prevMonth, prevYear, todayDate } from '../redux/actions'
import { useDispatch } from 'react-redux';

const SelectorContainer = styled.div`
  display:inline-block;
`;

export const Selector = ({...props}) => {

  const dispatch = useDispatch();

  return (
    <SelectorContainer>
      <button onClick={ () => dispatch(prevYear())}>{"<<"}</button>
      <button onClick={ () => dispatch(prevMonth())}>{"<"}</button>
      <button onClick={ () => dispatch(todayDate())}>{"Today"}</button>
      <button onClick={ () => dispatch(nextMonth())}>{">"}</button>
      <button onClick={ () => dispatch(nextYear())}>{">>"}</button>
    </SelectorContainer>
  )
}
