import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project' // 1. IMPORTAÇÃO NOVA AQUI

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/novoprojeto" element={<NewProject />} />
          {/* 2. ROTA NOVA AQUI */}
          <Route path="/project/:id" element={<Project />} /> 
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App