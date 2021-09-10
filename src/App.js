import './App.css';
import { DaysTable } from './components/DaysTable';
import { useDispatch, useSelector } from 'react-redux'
import styled  from 'styled-components'

import { nextMonth, nextYear, prevMonth, prevYear } from './redux/actions'


const Container = styled.section`
  max-width: 1000px;
`;

const MonthName = styled.h1`
  display: inline-block;
  ::first-letter{
    text-transform: capitalize;
  }
`;

const YearText =  styled.h3`
  display: inline-block;
  font-weight: lighter;
`;

function App() {
  const year = useSelector((state) => state.year);
  const month = useSelector((state) => state.month);
  console.log(month.weeks)
  return (
    <Container>
      <MonthName>{month.name}</MonthName>
      <YearText>{year}</YearText>
      <DaysTable weeks={month.weeks}/>
    </Container>
  );
}

export default App;
