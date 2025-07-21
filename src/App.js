import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  
} from "react-router-dom";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Albums from "./pages/Albums";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio-github">
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  // const location = useLocation(); 


  return (
    <div>
      <Navbar />
      <main className="App-header" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;