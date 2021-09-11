import React from 'react'
import styled from 'styled-components'
import { nextMonth, nextYear, prevMonth, prevYear, todayDate } from '../redux/actions'
import { useDispatch } from 'react-redux';

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: .3rem;
  background-color: #ffffff;
  border: 1px solid grey;
  margin: .3rem;
  border-radius: .3rem;
`;

export const Selector = ({...props}) => {

  const dispatch = useDispatch();

  return (
    <SelectorContainer>
      <Button onClick={ () => dispatch(prevYear())}>{"<<"}</Button>
      <Button onClick={ () => dispatch(prevMonth())}>{"<"}</Button>
      <Button onClick={ () => dispatch(todayDate())}>{"Today"}</Button>
      <Button onClick={ () => dispatch(nextMonth())}>{">"}</Button>
      <Button onClick={ () => dispatch(nextYear())}>{">>"}</Button>
    </SelectorContainer>
  )
}
