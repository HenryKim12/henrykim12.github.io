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
import Contact from './components/v2/Contact/Contact';
//import ParticlesBackground from './components/v1/ParticlesBackground/ParticlesBackground';
import { useRef } from 'react'

function App() {
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();

  return (
    <div className='App'> 
      <Menu aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} />
      
      <main className='sections'>
        <LeftLayout />

        <div className="mid-section"> 
          <HomeV2 /> 
          <div ref={aboutRef}><About /></div>
          <div ref={experienceRef}><Experience /></div>
          <div ref={projectsRef}><Projects /></div>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
