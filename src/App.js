import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Minigame from "./pages/Minigame";
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
  const location = useLocation(); 

  const headerStyle =
    location.pathname === "/projects"
      ? { background: "linear-gradient(-45deg, #51A7BF, #DAF4FF)" }
      : location.pathname === "/minigame"
      ? { background: "linear-gradient(-45deg, #FF8C00, #FFE4B5)" } 
      : location.pathname === "/contact"
      ? { background: "linear-gradient(-45deg, #FF6347, #FFD700)" } 
      : { background: "linear-gradient(-45deg, #0B4A3B, #FFD15C)" }; 

  return (
    <div>
      <Navbar />
      <main className="App-header" style={headerStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/minigame" element={<Minigame />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;