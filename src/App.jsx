import { NavBar } from "./layouts/NavBar"
import { Footer } from "./layouts/Footer"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import ProjectPage from "./pages/ProjectPage"
import Contact from "./pages/Contact"

function App() {
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-primary-foreground dark:bg-primary-foreground px-4 sm:px-6 lg:px-8">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
