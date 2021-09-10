import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextMonth, nextYear, prevMonth, prevYear } from '../redux/actions'

const Month = ({ date }) => {

  console.log(date)

  const year = useSelector((state) => state.year);
  const month = useSelector((state) => state.month);

  const dispatch = useDispatch();
  return (
    <div>
      { year }
      <br/>
      { month.index + month.name + month.days}
      <br/>
      <button onClick={()=> dispatch(nextYear())} >next year</button>
      <br/>
      <button onClick={() => dispatch(nextMonth())}>next month</button>
      <br/>
      <button onClick={() => dispatch(prevMonth())} >prev month</button>
      <br/>
      <button onClick={() => dispatch(prevYear())} >prev year</button>
    </div>
  )
}

export default Month