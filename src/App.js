// import FadeIn from 'react-fade-in/lib/FadeIn';
// import Fade from "react-reveal"
import './App.css';
// import MainPage from './components/v1/MainPage/MainPage';
// import { Route, Routes } from "react-router-dom"
import HomeV2 from "./components/v2/Home/Home"
import Menu from './components/v2/Menu/Menu';
import About from './components/v2/About/About';
import LeftLayout from './components/v2/LeftLayout/LeftLayout';
import Experience from "./components/v2/Experience/Experience";
import Projects from "./components/v2/Projects/Projects";
//import ParticlesBackground from './components/v1/ParticlesBackground/ParticlesBackground';

function App() {
  return (
    <div className='App'> 
      <Menu />
      
      <main className='sections'>
        <LeftLayout />

        <div className="mid-section"> 
          <HomeV2 /> 
          <About />
          <Experience />
          <Projects />
        </div>

      </main>
    </div>
  );
}

export default App;
