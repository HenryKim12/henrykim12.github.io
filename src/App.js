import './App.css';
import { useState } from "react";
import MainPage from './components/v1/MainPage/MainPage';
import StartPage from './components/v1/StartPage/StartPage';
import Button from "react-bootstrap/Button"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path='/v1' element={<MainPage/>} />
        {/* <div className="App">
          <MainPage />
        </div> */}
      <Route path="/" eleme/>
      
    </Routes>
    
  );
}

export default App;
