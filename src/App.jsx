import { NavBar } from "./layouts/NavBar"
import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

function App() {
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-primary-foreground dark:bg-primary-foreground px-4 sm:px-6 lg:px-8">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
    </div>
  )
}

export default App
