// import logo from './logo.svg'; 
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
import Minigame from "./pages/Minigame";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio-github">
        <Navbar />
          <main className="App-header ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/minigame" element={<Minigame />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
