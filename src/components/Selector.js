import React from 'react'
import styled from 'styled-components'
import { nextMonth, nextYear, prevMonth, prevYear } from '../redux/actions'
import { useDispatch } from 'react-redux';

const SelectorContainer = styled.div`
  display:flex;
`;

export const Selector = ({...props}) => {

  const dispatch = useDispatch();

  return (
    <SelectorContainer>
      <button onClick={ () => dispatch(prevMonth())}>{"<"}</button>
      <button onClick={ () => dispatch(prevYear())}>{"<<"}</button>
      <button onClick={ () => dispatch(prevYear())}>{"Today"}</button>
      <button onClick={ () => dispatch(nextMonth())}>{">"}</button>
      <button onClick={ () => dispatch(nextYear())}>{">>"}</button>
    </SelectorContainer>
  )
}
