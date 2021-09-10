import './App.css';
import Month from './components/Month';

function App() {

  const date = new Date();

  return (
    <>
      <Month date = {date}/>
    </>
  );
}

export default App;
