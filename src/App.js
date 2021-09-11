import './App.css';
import { DaysTable } from './components/DaysTable';
import { useSelector } from 'react-redux'
import styled  from 'styled-components'

import { Selector } from './components/Selector';


const Container = styled.section`
  display:flex;
  flex-direction: column;
  min-width: 730px;
  max-width: 988px;
  flex-wrap: wrap;
  text-align: center;
`;

const MonthName = styled.h1`
  display: inline-block;
  margin:1rem;
  ::first-letter{
    text-transform: capitalize;
  }
`;

const YearText =  styled.h3`
  margin:1rem;
  display: inline-block;
  font-weight: lighter;
`;

const Header = styled.header`
  display:flex;
`;

function App() {
  const year = useSelector((state) => state.year);
  const month = useSelector((state) => state.month);
  
  return (
    <Container>
      <Header>
        <MonthName>{month.name}</MonthName>
        <YearText>{year}</YearText>
        <Selector/>
      </Header>
      <DaysTable weeks={month.weeks}/>
    </Container>
  );
}

export default App;
