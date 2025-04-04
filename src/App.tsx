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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'






function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/resume" element={<Resume></Resume>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </Router>

  )
}

export default App
