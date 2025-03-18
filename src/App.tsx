import './Global.css'
import './components/Navbar.css'
import './components/Footer.css'
import './components/Project.css'
import './pages/Resume.css'
import './pages/pages.css'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

import { useState, createContext, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export const GlobalContext  = createContext()

export const GlobalProvider = ({ children }) => {

  const [partyModeOn, setPartyModeOn] = useState(false);
  const togglePartyMode = ()=>{ 
    setPartyModeOn(!partyModeOn)
  }
  const colorIntervalRef = useRef(null)


  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const changeColors = ()=>{
      document.documentElement.style.setProperty('--primary-color', `${getRandomColor()}`);
      document.documentElement.style.setProperty('--secondary-color', `${getRandomColor()}`);
      document.documentElement.style.setProperty('--link-hover', `${getRandomColor()}`);
      document.documentElement.style.setProperty('--mobile-menu-color', `${getRandomColor()}`);
      document.documentElement.style.setProperty('--text-color', `${getRandomColor()}`);
  }
  
  useEffect(() => {
    if (partyModeOn) {
      colorIntervalRef.current = setInterval(changeColors, 700);
    } else {
        clearInterval(colorIntervalRef.current);

      document.documentElement.style.setProperty('--primary-color', 'transparent');
      document.documentElement.style.setProperty('--secondary-color', 'rgb(30, 30, 30)');
      document.documentElement.style.setProperty('--link-hover', '#cbba37');
      document.documentElement.style.setProperty('--mobile-menu-color', '#292929');
      document.documentElement.style.setProperty('--text-color', 'rgb(213, 213, 213)'); 
    }
  }, [partyModeOn]);

  return (
    <GlobalContext.Provider value={{partyModeOn, togglePartyMode}}>
      {children}
    </GlobalContext.Provider>
  )

}





function App() {
  return (
    <GlobalProvider>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/projects" element={<Projects></Projects>} />
          <Route path="/resume" element={<Resume></Resume>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </Router>

    </GlobalProvider>

  )
}

export default App
