import FadeIn from 'react-fade-in/lib/FadeIn';
import './App.css';
// import MainPage from './components/v1/MainPage/MainPage';
// import { Route, Routes } from "react-router-dom"
import HomeV2 from "./components/v2/Home/Home"
import Menu from './components/v2/Menu/Menu';
import About from './components/v2/About/About';
// import ParticlesBackground from './components/v1/ParticlesBackground/ParticlesBackground';

function App() {
  return (
    <div className='App'> 
      <Menu />
      <main className='sections'>
        <div className='left-section'>
          <p>HELLO</p>
        </div>

        <div>
          
          <div className='content'>
            <div className='home'>
              <HomeV2 /> 
            </div>
            <div>
              <About />
            </div>
          </div>
        </div>

        <div>
          HELLO WORDL 2
        </div>
      </main>
    </div>
  );
}

export default App;
