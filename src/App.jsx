import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import WorkExperiencePage from './pages/WorkExperiencePage.jsx'
import OtherInfoPage from './pages/OtherInfoPage.jsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow bg-gray-900 text-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/work" element={<WorkExperiencePage />} />
            <Route path="/other" element={<OtherInfoPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App


