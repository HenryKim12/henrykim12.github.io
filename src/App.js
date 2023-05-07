import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import MainPage from './components/MainPage/MainPage';
import StartPage from './components/StartPage/StartPage';
import Button from "react-bootstrap/Button"

function App() {
  const [start, setStart] = useState(true);

  function changeStart() {
    setStart(false);
  }

  return (
    <div className="App">
      {start ? 
      <div>
        <StartPage prop={start}/>
        <Button variant="secondary" onClick={changeStart}>Who is Henry Kim?</Button>
      </div> : <MainPage />}
    </div>
  );
}

export default App;
